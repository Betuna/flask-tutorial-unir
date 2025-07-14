Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
python.exe -m pip install --upgrade pip
rm venv -Recurse -Force
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
