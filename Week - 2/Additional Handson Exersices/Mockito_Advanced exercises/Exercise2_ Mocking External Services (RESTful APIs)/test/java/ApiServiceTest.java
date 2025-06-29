import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ApiServiceTest {
    @Test
    public void testServiceWithMockRestClient() {
        // 1. Create a mock REST client
        RestClient mockRestClient = mock(RestClient.class);

        // 2. Stub the method to return "Mock Response"
        when(mockRestClient.getResponse()).thenReturn("Mock Response");

        // 3. Initialize ApiService with the mock
        ApiService apiService = new ApiService(mockRestClient);

        // 4. Call the method under test
        String result = apiService.fetchData();

        // 5. Verify the result
        assertEquals("Fetched Mock Response", result);

        // (Optional) Verify the mock interaction
        verify(mockRestClient).getResponse();
    }
}