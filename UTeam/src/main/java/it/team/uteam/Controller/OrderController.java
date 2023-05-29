package it.team.uteam.Controller;

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

    @PostMapping("/addOrder")
    public HttpEntity<?> addOrder(@RequestBody ReqOrder order) {
        ApiResponse apiResponse = orderService.addOrder(order);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping("/getOrder")
    public HttpEntity<?> OrderList() {
        List<ResOrder> resOrders = orderService.orderList();
        return ResponseEntity.ok(resOrders);
    }
}
