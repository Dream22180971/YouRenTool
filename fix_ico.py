from PIL import Image
import os

# 输入 PNG 文件路径
input_png = os.path.join(os.path.dirname(__file__), 'src-tauri', 'icons', '128x128.png')
output_ico = os.path.join(os.path.dirname(__file__), 'src-tauri', 'icons', 'icon.ico')

# 打开 PNG 图像
img = Image.open(input_png)

# 转换为 ICO 格式，包含多种尺寸
img.save(output_ico, format='ICO', sizes=[(32, 32), (48, 48), (64, 64), (128, 128)])

print('icon.ico generated successfully')
