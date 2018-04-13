package test;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * Created by Mtime on 2018/1/24.
 */
public class TestA {

    public static void main(String[] args) throws IOException, URISyntaxException, AWTException {
        Desktop.getDesktop().browse(
                new URL("http://cd-mon-dashboard.inc-mtime.com/screen/971").toURI());
        Robot robot = new Robot();
        //停留10s
        //robot.delay(10000);
        Dimension d = new Dimension(Toolkit.getDefaultToolkit().getScreenSize());
        int width = (int) d.getWidth();
        int height = (int) d.getHeight();
        // 最大化浏览器
        robot.keyRelease(KeyEvent.VK_F11);
        robot.delay(10000);
        Image image = robot.createScreenCapture(new Rectangle(0, 0, width,
                height));
        BufferedImage bi = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);
        Graphics g = bi.createGraphics();
        g.drawImage(image, 0, 0, width, height, null);
        // 保存图片
        ImageIO.write(bi, "jpg", new File("d:/iteye.com.jpg"));
    }
}
