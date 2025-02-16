package com.yourpillows.Services;

import com.yourpillows.DTO.ProductDTO;
import com.yourpillows.Models.Product;
import com.yourpillows.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStockQuantity(productDTO.getStockQuantity());

        if (productDTO.getImageUrl() == null || productDTO.getImageUrl().isEmpty()) {
            product.setImageUrl("/api/images/default.jpg");
        } else {
            product.setImageUrl(productDTO.getImageUrl());
        }

        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
