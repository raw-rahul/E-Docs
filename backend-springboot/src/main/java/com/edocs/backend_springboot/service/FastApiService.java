package com.edocs.backend_springboot.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import org.springframework.web.multipart.MultipartFile;

@Service
public class FastApiService {

//    private final String FASTAPI_URL = "http://127.0.0.1:8000";
    @Value("${fastapi.url}")
    private String FASTAPI_URL;

    public ResponseEntity<byte[]> processFiles(
            String examName,
            MultipartFile photo,
            MultipartFile signature,
            MultipartFile marksheet
    ) throws Exception {

        RestTemplate restTemplate = new RestTemplate();

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

        if (photo != null) {
            body.add("PHOTO", new ByteArrayResource(photo.getBytes()) {
                @Override
                public String getFilename() {
                    return photo.getOriginalFilename();
                }
            });
        }

        if (signature != null) {
            body.add("SIGNATURE", new ByteArrayResource(signature.getBytes()) {
                @Override
                public String getFilename() {
                    return signature.getOriginalFilename();
                }
            });
        }

        if (marksheet != null) {
            body.add("MARKSHEET", new ByteArrayResource(marksheet.getBytes()) {
                @Override
                public String getFilename() {
                    return marksheet.getOriginalFilename();
                }
            });
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(body, headers);

        ResponseEntity<byte[]> response = restTemplate.exchange(
                FASTAPI_URL + "/process/" + examName,
                HttpMethod.POST,
                request,
                byte[].class
        );

        return response;
    }
}