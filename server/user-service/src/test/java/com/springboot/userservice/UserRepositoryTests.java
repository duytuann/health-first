package com.springboot.userservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

    // @Autowired
    // private UserRepository userRepository;

    // @Autowired
    // private TestEntityManager entityManager;

    @Test
    public void testCreateUser() {
        // User user = new User();
        // user.setEmail("tt.tung2612002@gmail.com");
        // user.setPassword("tung2612002");
        // user.setFirstName("Tung");
        // user.setLastName("Tran");
        // User saved = userRepository.save(user);
        // User existedUser = entityManager.find(User.class, saved.getId());
        // assertThat(existedUser.getEmail()).isEqualTo(user.getEmail());
    }

}