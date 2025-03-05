package com.yourpillows.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/images")
public class ImageUploadController {

    private static final Logger logger = LoggerFactory.getLogger(ImageUploadController.class); // Create logger

    @Value("${upload.directory}")
    private String uploadDirectory;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No file uploaded!"); // ✅ Handle missing file
        }

        try {
            // Log the upload directory to check if it's being injected correctly
            logger.info("Upload directory: {}", uploadDirectory);

            // Ensure the uploads directory exists
            File uploadDir = new File(uploadDirectory);
            if (!uploadDir.exists()) {
                boolean created = uploadDir.mkdirs();  // Attempt to create the directory
                if (!created) {
                    logger.error("Failed to create upload directory at: {}", uploadDirectory); // Log the error
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body("Failed to create upload directory.");
                }
            }

            // Log the filename being uploaded
            String filename = file.getOriginalFilename();
            logger.info("Uploading file: {}", filename);

            // Save file to uploads folder
            String filePath = uploadDirectory + File.separator + filename;
            file.transferTo(new File(filePath));

            // Return image URL
            String imageUrl = "/api/products/" + filename;
            return ResponseEntity.ok(imageUrl);
        } catch (IOException e) {
            logger.error("Image upload failed: {}", e.getMessage()); // Log the exception message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/uploads/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
        try {
            logger.info("Fetching image: {}", filename); // Log the image fetch attempt
            Path imagePath = Paths.get(uploadDirectory, filename);
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // ✅ Ensure correct content type
                    .body(imageBytes);
        } catch (IOException e) {
            logger.error("Error fetching image: {}", filename, e); // Log error if image fetch fails
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
