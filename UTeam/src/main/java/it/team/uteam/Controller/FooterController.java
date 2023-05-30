package it.team.uteam.Controller;

import it.team.uteam.Entity.Footer;
import it.team.uteam.Service.FooterService;
import it.team.uteam.payload.ApiResponse;
import it.team.uteam.payload.ReqFooter;
import it.team.uteam.payload.ResFooter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/footer")
@RestController
@RequiredArgsConstructor
public class FooterController {
    private final FooterService footerService;

    @GetMapping("/list")
    public HttpEntity<?> getFooter() {
        List<ResFooter> course = footerService.getFooter();
        return ResponseEntity.ok(course);
    }

    @PostMapping
    public HttpEntity<?> addFooter(@RequestBody ReqFooter reqFooter) {
        Footer products = footerService.addFooter(reqFooter);
        return ResponseEntity.ok(products);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editFooter(@PathVariable Integer id, @RequestBody ReqFooter reqFooter) {
        ApiResponse apiResponse = footerService.editFooter(id, reqFooter);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteFooter(@PathVariable Integer id) {
        ApiResponse apiResponse = footerService.deleteFooter(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }
}
