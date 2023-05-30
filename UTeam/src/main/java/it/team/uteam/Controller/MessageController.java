package it.team.uteam.Controller;

import it.team.uteam.Entity.Messages;
import it.team.uteam.Repository.MessageRepo;
import it.team.uteam.Service.MessageService;
import it.team.uteam.payload.ReqMessages;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/api/message")
@RestController
@RequiredArgsConstructor
public class MessageController {

    private final MessageRepo messageRepo;

    private final MessageService messageService;

    @GetMapping("/list")
    public HttpEntity<?> getMessage() {
        List<Messages> all = messageRepo.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping
    public HttpEntity<?> addMessages(@RequestBody ReqMessages reqMessages) {
        Messages messages = messageService.SendMessages(reqMessages);
        return ResponseEntity.status(messages != null ? 200  : 409).body(messages);
    }
}
