import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class FileServiceTest {
    @Test
    public void testServiceWithMockFileIO() {
        // 1. Create mock file reader and writer
        FileReader mockFileReader = mock(FileReader.class);
        FileWriter mockFileWriter = mock(FileWriter.class);

        // 2. Stub the file reader to return "Mock File Content"
        when(mockFileReader.read()).thenReturn("Mock File Content");

        // 3. Initialize FileService with the mocks
        FileService fileService = new FileService(mockFileReader, mockFileWriter);

        // 4. Call the method under test
        String result = fileService.processFile();

        // 5. Verify the result
        assertEquals("Processed Mock File Content", result);

        // 6. Verify the mock interactions
        verify(mockFileReader).read();
        verify(mockFileWriter).write("Processed Mock File Content");
    }
}