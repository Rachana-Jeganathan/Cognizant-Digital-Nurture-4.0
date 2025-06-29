import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class MultiReturnServiceTest {
    @Test
    public void testServiceWithMultipleReturnValues() {
        // 1. Create mock Repository
        Repository mockRepository = mock(Repository.class);

        // 2. Stub the getData() method with multiple returns
        when(mockRepository.getData())
                .thenReturn("First Mock Data")
                .thenReturn("Second Mock Data");

        // 3. Create service with mock
        Service service = new Service(mockRepository);

        // 4. Test first call
        String firstResult = service.processData();
        assertEquals("Processed First Mock Data", firstResult);

        // 5. Test second call
        String secondResult = service.processData();
        assertEquals("Processed Second Mock Data", secondResult);

        // 6. Verify interaction (optional)
        verify(mockRepository, times(2)).getData();
    }
}