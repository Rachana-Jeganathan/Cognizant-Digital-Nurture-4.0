import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ServiceTest {
    @Test
    public void testServiceWithMockRepository() {
        // 1. Create a mock repository
        Repository mockRepository = mock(Repository.class);

        // 2. Stub the method to return "Mock Data"
        when(mockRepository.getData()).thenReturn("Mock Data");

        // 3. Create the service with the mock
        Service service = new Service(mockRepository);

        // 4. Call the method under test
        String result = service.processData();

        // 5. Verify the result
        assertEquals("Processed Mock Data", result);

        // (Optional) Verify the mock interaction
        verify(mockRepository).getData();
    }
}