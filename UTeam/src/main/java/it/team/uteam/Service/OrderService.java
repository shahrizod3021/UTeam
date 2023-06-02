package it.team.uteam.Service;

import it.team.uteam.Entity.Order;
import it.team.uteam.Repository.OrderRepository;
import it.team.uteam.payload.ApiResponse;
import it.team.uteam.payload.ReqOrder;
import it.team.uteam.payload.ResOrder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public ApiResponse addOrder(ReqOrder reqOrder) {
        Order build = Order.builder()
                .companyName(reqOrder.getCompanyName())
                .why(reqOrder.getWhy())
                .email(reqOrder.getEmail())
                .lastName(reqOrder.getLastName())
                .phoneNumber(reqOrder.getPhoneNumber())
                .build();
        build.setName(reqOrder.getName());
        orderRepository.save(build);
        return new ApiResponse("add order is successfully add", true);
    }

    public List<ResOrder> orderList() {
        List<Order> all = orderRepository.findAll();
        List<ResOrder> resOrders = new ArrayList<>();
        for (Order order : all) {
            ResOrder build = ResOrder.builder()
                    .name(order.getName())
                    .phoneNumber(order.getPhoneNumber())
                    .lastName(order.getLastName())
                    .email(order.getEmail())
                    .companyName(order.getCompanyName())
                    .why(order.getWhy())
                    .build();
            resOrders.add(build);
        }
        return resOrders;
    }
}
