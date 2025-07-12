package scalable.ecommerce.userservice.repository;

import scalable.ecommerce.userservice.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}