const mqtt = require("mqtt");

// Options de connexion au serveur MQTT
var options = {
  host: "test.mosquitto.org",
  port: 1883,
};

// Connexion au serveur MQTT
const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Connecté au serveur MQTT");

  // Fonction pour simuler la lecture de la température toutes les 5 secondes
  setInterval(() => {
    // Génération d'une valeur de température aléatoire
    const temperature = Math.floor(Math.random() * (45 + 10) - 10);

    // Publication de la valeur de température sur le sujet "temperature"
    client.publish("Temp", temperature.toString());
    console.log(`Température publiée : ${temperature}`);
  }, 5000);
});
