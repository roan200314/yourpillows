package com.yourpillows.Config;

import com.yourpillows.Models.Product;
import com.yourpillows.Repositories.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataLoader {

    @Bean
    @Transactional
    CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {
            long count = productRepository.count();
            System.out.println("ℹ️ Current Product Count: " + count);

            if (count == 0) { // Prevent duplicate inserts
                System.out.println("🚀 Inserting products into database...");

                List<Product> products = List.of(
                        new Product("Zwangerschap kussen", "Lichtgewicht en ademend voor zacht comfort.", new BigDecimal("59.95"), 100, "/uploads/zwangerschapkussen1.jpg"),
                        new Product("Vliegtuig kussen", "Comfort en duurzaamheid perfect gecombineerd.", new BigDecimal("59.95"), 100, "/uploads/vliegtuigkussen1.jpg"),
                        new Product("Air kussen", "Luxe zijdezachte afwerking.", new BigDecimal("59.95"), 100, "/uploads/airKussen1.jpg"),
                        new Product("Persoonlijk kussen", "Volledig aanpasbaar aan jouw voorkeuren.", new BigDecimal("59.95"), 100, "/uploads/Quiz_foto.png")
                );

                productRepository.saveAll(products);
                System.out.println("✅ Products successfully inserted.");
            } else {
                System.out.println("ℹ️ Database already contains products. Skipping insertion.");
            }
        };
    }
}
