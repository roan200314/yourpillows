package com.yourpillows.Services;

import com.yourpillows.Models.Product;
import com.yourpillows.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Save Product from DTO
    public Product saveProduct(com.yourpillows.DTO.ProductDTO productDTO) {  // Use Correct DTO
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStockQuantity(productDTO.getStockQuantity());

        return productRepository.save(product);
    }
}
