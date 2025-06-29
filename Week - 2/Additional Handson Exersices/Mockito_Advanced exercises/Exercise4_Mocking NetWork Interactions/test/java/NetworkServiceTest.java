import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class NetworkServiceTest {
    @Test
    public void testServiceWithMockNetworkClient() {
        // 1. Create mock NetworkClient
        NetworkClient mockNetworkClient = mock(NetworkClient.class);

        // 2. Stub the connect() method
        when(mockNetworkClient.connect()).thenReturn("Mock Connection");

        // 3. Create service with mock
        NetworkService networkService = new NetworkService(mockNetworkClient);

        // 4. Test the method
        String result = networkService.connectToServer();

        // 5. Verify the result
        assertEquals("Connected to Mock Connection", result);

        // 6. Verify interaction (optional)
        verify(mockNetworkClient).connect();
    }
}