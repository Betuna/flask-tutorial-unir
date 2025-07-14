from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/01justificacion")
def justificacion():
    return render_template("01justificacion.html")


@app.route("/00introduction")
def introduction():
    return render_template("00introduction.html")

@app.route("/02instalacion")
def instalacion():
    return render_template("02instalacion.html")

@app.route("/03primeros_pasos")
def primeros_pasos():
    return render_template("03primeros_pasos.html")


@app.route("/04utilizacion_de_flask")
def utilizacion_de_flask():
 return render_template("04utilizacion_de_flask.html")

@app.route("/05explicacion_del_funcionamiento_de_flask")
def explicacion_del_funcionamiento_de_flask():
    return render_template("05explicacion_del_funcionamiento_de_flask.html")
@app.route("/06ejemplo_paso_a_paso")
def ejemplo_paso_a_paso():
    return render_template("06ejemplo_paso_a_paso.html")
@app.route("/07conclusiones_del_tutorial")
def conclusiones_del_tutorial():
    return render_template("07conclusiones_del_tutorial.html")

if __name__ == "__main__":
    app.run(debug=True)
