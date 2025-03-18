package com.yourpillows.Controllers;

import com.yourpillows.DTO.OrdersDTO;
import com.yourpillows.Models.Orders;
import com.yourpillows.Services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4173") // Adjust for frontend
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping("/create")
    public Orders createOrder(@RequestBody OrdersDTO orderDTO) {
        return ordersService.createOrder(orderDTO);
    }
}
