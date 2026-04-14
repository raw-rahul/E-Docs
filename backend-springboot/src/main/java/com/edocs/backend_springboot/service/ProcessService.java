package com.edocs.backend_springboot.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProcessService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${fastapi.url}")
    private String FASTAPI_URL;

    public ResponseEntity<byte[]> processFiles(
            String examName,
            MultipartFile photo,
            MultipartFile signature,
            MultipartFile marksheet
    ) {

//        String url = "http://localhost:8000/process/" + examName;
        String url = FASTAPI_URL + "/process/" + examName.toLowerCase();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new org.springframework.util.LinkedMultiValueMap<>();

        try {
            if (photo != null)
                body.add("PHOTO", new MultipartInputStreamFileResource(photo));

            if (signature != null)
                body.add("SIGNATURE", new MultipartInputStreamFileResource(signature));

            if (marksheet != null)
                body.add("MARKSHEET", new MultipartInputStreamFileResource(marksheet));
        } catch (Exception e) {
            throw new RuntimeException("File error");
        }

        HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(body, headers);

        ResponseEntity<byte[]> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                request,
                byte[].class
        );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=processed_docs.zip")
                .body(response.getBody());
    }
}