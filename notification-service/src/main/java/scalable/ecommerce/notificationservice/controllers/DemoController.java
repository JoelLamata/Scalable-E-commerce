package scalable.ecommerce.notificationservice.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/notification/demo")
public class DemoController {
    @GetMapping("/demoMethod")
    public String demoMethod() {
        return "Hello string";
    }
}
