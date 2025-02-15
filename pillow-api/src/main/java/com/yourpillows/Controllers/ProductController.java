package com.yourpillows.Controllers;

import com.yourpillows.DTO.ProductDTO;
import com.yourpillows.Models.Product;
import com.yourpillows.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public Product addProduct(@RequestBody ProductDTO productDTO) {
        return productService.saveProduct(productDTO);
    }
}
