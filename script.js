// Récupération des éléments du DOM
const pwEl = document.getElementById("pw"); // Élément où le mot de passe généré sera affiché
const copyEl = document.getElementById("copy"); // Bouton de copie du mot de passe
const lengthEl = document.getElementById("lenght"); // Champ d'entrée de la longueur du mot de passe
const generateEl = document.getElementById("generate"); // Bouton pour générer le mot de passe

// Récupération des éléments des cases à cocher pour les types de caractères
const upperEl = document.getElementById("upper"); // Case à cocher pour inclure des majuscules
const lowerEl = document.getElementById("lower"); // Case à cocher pour inclure des minuscules
const numberEl = document.getElementById("number"); // Case à cocher pour inclure des chiffres
const symbolEl = document.getElementById("symbol"); // Case à cocher pour inclure des caractères spéciaux

// Définition des caractères utilisés pour chaque type de caractère
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!'[]{}-§/;.,:?€@#$%^&*()_+=|";

// Fonction pour obtenir un caractère minuscule aléatoire
const getLowercase = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

// Fonction pour obtenir un caractère majuscule aléatoire
const getUppercase = () => upperLetters[Math.floor(Math.random() * upperLetters.length)];

// Fonction pour obtenir un chiffre aléatoire
const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)];

// Fonction pour obtenir un caractère spécial aléatoire
const getSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

// Fonction pour générer le mot de passe en fonction des paramètres choisis
const generatePassword = () => {
    const length = lengthEl.value; // Récupération de la longueur du mot de passe depuis l'input
    const hasUppercase = upperEl.checked; // Vérification si la case à cocher pour les majuscules est cochée
    const hasLowercase = lowerEl.checked; // Vérification si la case à cocher pour les minuscules est cochée
    const hasNumber = numberEl.checked; // Vérification si la case à cocher pour les chiffres est cochée
    const hasSymbol = symbolEl.checked; // Vérification si la case à cocher pour les caractères spéciaux est cochée

    let charset = ""; // Chaîne de caractères contenant tous les caractères possibles pour le mot de passe
    if (hasUppercase) charset += upperLetters; // Ajout des majuscules à la chaîne si la case est cochée
    if (hasLowercase) charset += lowerLetters; // Ajout des minuscules à la chaîne si la case est cochée
    if (hasNumber) charset += numbers; // Ajout des chiffres à la chaîne si la case est cochée
    if (hasSymbol) charset += symbols; // Ajout des caractères spéciaux à la chaîne si la case est cochée

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)]; // Construction du mot de passe caractère par caractère
    }
    pwEl.innerText = password; // Affichage du mot de passe généré
};

generateEl.addEventListener("click", generatePassword); // Écouteur d'événement pour le bouton de génération du mot de passe

copyEl.addEventListener("click", () => {
    const password = pwEl.innerText;
    if (!password) return;

  // Copier le mot de passe dans le presse-papiers en utilisant l'API Clipboard
    navigator.clipboard.writeText(password)
    .then(() => alert("Mot de passe copié !"))
    .catch((err) => console.error("Impossible de copier le texte : ", err));
});
