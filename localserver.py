import os
import subprocess

def start_http_server(port=8000):
    # 获取当前脚本所在的目录
    current_directory = os.path.dirname(os.path.abspath(__file__))
    
    # 切换到当前脚本所在的目录
    os.chdir(current_directory)
    
    # 启动HTTP服务器
    subprocess.run(['python', '-m', 'http.server', str(port)])

if __name__ == "__main__":
    start_http_server()