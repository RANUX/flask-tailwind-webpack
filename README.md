# Flask tailwind webpack boilerplate

1. Create .env
```ini
# Flask config
FLASK_APP=app.py
FLASK_ENV=development
FLASK_DEBUG=1
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
```

2. Create .venv 
```bash
python3 -m venv .venv
```
pip install -r requirements.txt
source .venv/bin/activate
```

3. Install node dependencies
```bash
npm install
```
4. Run npm watch
```bash
npm run watch
```

5. Run development server
```bash
flask run
```