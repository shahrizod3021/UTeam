package it.team.uteam.Controller;

import it.team.uteam.Entity.Order;
import it.team.uteam.Repository.OrderRepository;
import it.team.uteam.Service.OrderService;
import it.team.uteam.payload.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderRepository orderRepository;

    @PostMapping("/addOrder")
    public HttpEntity<?> addOrder(@RequestBody ReqOrder order) {
        ApiResponse apiResponse = orderService.addOrder(order);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> OrderList() {
        List<Order> all = orderRepository.findAll();
        return ResponseEntity.ok(all);
    }
}
