package com.yourpillows.Services;

import com.yourpillows.DTO.OrdersDTO;
import com.yourpillows.Models.Orders;
import com.yourpillows.Repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;

    public Orders createOrder(OrdersDTO orderDTO) {
        Orders order = new Orders();
        order.setEmail(orderDTO.getEmail());
        order.setNewsletter(orderDTO.isNewsletter());
        order.setCountry(orderDTO.getCountry());
        order.setFirstName(orderDTO.getFirstName());
        order.setLastName(orderDTO.getLastName());
        order.setCompany(orderDTO.getCompany());
        order.setStreet(orderDTO.getStreet());
        order.setHouseNumber(orderDTO.getHouseNumber());
        order.setPostalcode(orderDTO.getPostalcode());
        order.setCity(orderDTO.getCity());
        order.setPhone(orderDTO.getPhone());
        order.setSmsOffers(orderDTO.isSmsOffers());
        order.setTotalPrice(orderDTO.getTotalPrice());

        return ordersRepository.save(order);
    }
}
