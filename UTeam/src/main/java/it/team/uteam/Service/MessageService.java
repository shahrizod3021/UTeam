package it.team.uteam.Service;

import it.team.uteam.Entity.Messages;
import it.team.uteam.Repository.MessageRepo;
import it.team.uteam.payload.ReqMessages;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepo messageRepo;

    public Messages SendMessages(ReqMessages reqMessages) {
        if (!messageRepo.existsMessagesByNameEqualsIgnoreCase(reqMessages.getName())) {
            Messages messages = new Messages(reqMessages.getMessage(), reqMessages.getPhoneNumber());
            messages.setName(reqMessages.getName());
            return messageRepo.save(messages);
        }
        return null;
    }
}