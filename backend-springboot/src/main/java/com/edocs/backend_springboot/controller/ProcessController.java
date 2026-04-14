package com.edocs.backend_springboot.controller;

import com.edocs.backend_springboot.util.MultipartInputStreamFileResource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.client.RestTemplate;

import java.io.*;

@RestController
@RequestMapping("/api/process")
public class ProcessController {
    @Value("${fastapi.url}")
    private String FASTAPI_URL;

//    private final String PYTHON_API = "http://127.0.0.1:8000/process/";
    String PYTHON_API = FASTAPI_URL + "/process/";

    @PostMapping("/{examName}")
    public ResponseEntity<InputStreamResource> processDocs(
            @PathVariable String examName,
            @RequestParam(required = false) MultipartFile PHOTO,
            @RequestParam(required = false) MultipartFile SIGNATURE,
            @RequestParam(required = false) MultipartFile MARKSHEET
    ) throws IOException {

        String url = PYTHON_API + examName.toLowerCase();

        RestTemplate restTemplate = new RestTemplate();

        // Create body
        var body = new org.springframework.util.LinkedMultiValueMap<String, Object>();

        if (PHOTO != null)
            body.add("PHOTO", new MultipartInputStreamFileResource(PHOTO.getInputStream(), PHOTO.getOriginalFilename()));

        if (SIGNATURE != null)
            body.add("SIGNATURE", new MultipartInputStreamFileResource(SIGNATURE.getInputStream(), SIGNATURE.getOriginalFilename()));

        if (MARKSHEET != null)
            body.add("MARKSHEET", new MultipartInputStreamFileResource(MARKSHEET.getInputStream(), MARKSHEET.getOriginalFilename()));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<?> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<byte[]> response = restTemplate.postForEntity(url, requestEntity, byte[].class);

        ByteArrayInputStream bis = new ByteArrayInputStream(response.getBody());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=processed_docs.zip")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new InputStreamResource(bis));
    }

}