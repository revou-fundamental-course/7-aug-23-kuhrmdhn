const shapesOption = document.getElementById("shape-option");
const lengthUnitOption = document.getElementById("length-unit-option");
const heroHeader = document.getElementById("hero-header");
const heroImage = document.getElementById("hero-image");
const input = document.querySelectorAll("input")
const input1 = document.getElementById("first-number");
const input2 = document.getElementById("second-number");
const input3 = document.getElementById("third-number");
const hitungButton = document.getElementById("hitung-button")
const resetButton = document.getElementById("reset-button");
const outputDesc = document.getElementById("output-desc");
const output = document.getElementById("output");
const pi = Math.PI
let lengthUnit;
let result;
let shapesOperation;
let setDisplay;
let outputDescText = document.innerHTML;


// Validate Input
function validateInput () {
    outputDesc.innerText = "Input Tidak Boleh Kosong";
    output.innerText = "";
};

// Default length unit value
function defaultLengthUnit () {
    lengthUnitOption.addEventListener("change", () => {
        lengthUnit = lengthUnitOption.value
    });
    if(lengthUnitOption.value === "cm") {
        lengthUnit = "cm"
    };
};
defaultLengthUnit();

// Output Luas Bangun
function luasOutput () {
    if(lengthUnit) {
        output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result} ${lengthUnit}<sup>2</sup>`
        return;
    } else if (!lengthUnit) {
        output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result}`
    }
};

// Output Keliling Bangun
function kelilingOutput () {
    if(lengthUnit) {
        output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result} ${lengthUnit}`
        return;
    } else if (!lengthUnit) {
        output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result}`
    }
}

// Reset Button Function
function resetOperation() {
    for(let i=0; i<input.length; i++) {
        input[i].value = ""
    };
    outputDesc.innerText = ""
    output.innerText = ""
};
resetButton.addEventListener("click", resetOperation);


//Math Functions and Result Output
class Lingkaran {
    constructor (r) {
    this.r = r
    };
    kelilingLingkaran () {
        result = 2 * pi * this.r;
        result = result.toPrecision(3)
        outputDescText = `K = 2 x π x r <br> K = 2 x ${pi} x ${this.r}<br> K = ${result} ${lengthUnit}`;
        outputDesc.innerHTML = outputDescText;
        kelilingOutput();
    };
    luasLingkaran () {
        result = pi * this.r ** 2;
        result = result.toPrecision(3)
        outputDescText = `L = π x r<sup>2</sup> <br> K = ${pi} x ${this.r}<sup>2</sup><br> L = ${result} ${lengthUnit}<sup>2</sup>`;
        outputDesc.innerHTML = outputDescText;
        luasOutput();
    };
};

class PersegiPanjang {
    constructor (p, l) {
    this.p = p
    this.l = l
    }
    kelilingPersegiPanjang () {
        result = 2 * (this.p + this.l);
        result = result.toPrecision(3)
        outputDescText = `K = 2 x (p + l) <br> K = 2 x (${this.p} +  ${this.l}) <br> K = ${result} ${lengthUnit}`;
        outputDesc.innerHTML = outputDescText;
        kelilingOutput();
    };
    luasPersegiPanjang () {
        result = this.p * this.l;
        result = result.toPrecision(3)
        outputDescText = `L = p x l <br> L = ${this.p} x ${this.l} <br> L = ${result} ${lengthUnit}<sup>2</sup>`;
        outputDesc.innerHTML = outputDescText;
        luasOutput();
    };
};

class Persegi {
    constructor (s) {
    this.s = s
    }
    kelilingPersegi () {
        result = 4 * this.s;
        result = result.toPrecision(3)
        outputDescText = `K = 4 x s <br> K = 4 x ${this.s} <br> K = ${result} ${lengthUnit}`;
        outputDesc.innerHTML = outputDescText;
        kelilingOutput();
    };
    luasPersegi () {
        result = this.s ** 2;
        result = result.toPrecision(3)
        outputDescText = `L = s<sup>2</sup> <br> L = ${this.s}<sup>2</sup> <br> L = ${result} ${lengthUnit}<sup>2</sup>`;
        outputDesc.innerHTML = outputDescText;
        luasOutput();
    };
};

class Segitiga {
    constructor (a, t, b) {
        this.a = a
        this.t = t
        this.b = b
    };
    kelilingSegitiga () {
        result = this.a + this.b + this.t;
        result = result.toPrecision(3)
        outputDescText = `K = a + b + t <br> K = ${this.a} + ${this.b} + ${this.t} <br> K = ${result} ${lengthUnit}`;
        outputDesc.innerHTML = outputDescText;
        kelilingOutput();
    };
    luasSegitiga () {
        result = (this.a * this.t) / 2;
        result = result.toPrecision(3)
        outputDescText = `L = a x t ÷ 2 <br> L = ${this.a} x ${this.t} ÷ 2 <br> L = ${result} ${lengthUnit}<sup>2</sup>`;
        outputDesc.innerHTML = outputDescText;
        luasOutput();
    };
};


// Display Functions (Hero Header, Hero Image, Input Display, Input Placeholder Attribute)
class Display {
    constructor () {
        this.heroHeader = heroHeader
        this.heroImage = heroImage
        this.input1 = input1
        this.input2 = input2
        this.input3 = input3
    }
    lingkaranDisplay () {
        // userAccess = false
        // Hero
        this.heroHeader.innerText = "Lingkaran";
        this.heroImage.setAttribute("src", "./assets/images/circle.png");
        // Input 1
        this.input1.value = ""
        this.input1.setAttribute("placeholder", "Masukkan Nilai Jari-Jari (r)");
    
        // Input 2
        this.input2.style.display = "none";
        
        // Input 3
        this.input3.style.display = "none";
    };
    persegiPanjangDisplay () {
        // Hero
        this.heroHeader.innerText = "Persegi Panjang"
        this.heroImage.setAttribute("src", "./assets/images/rectangle.png");  
        
        // Input 1
        this.input1.value = ""
        this.input1.setAttribute("placeholder", "Masukkan Panjang (p)");
    
        // Input 2
        this.input2.style.display = "block";
        this.input2.setAttribute("placeholder", "Masukkan Lebar (l)");
    
        // Input 3
        this.input3.style.display = "none";
    };
    persegiDisplay () {
        // Hero
        this.heroHeader.innerText = "Persegi"
        this.heroImage.setAttribute("src", "./assets/images/square.png");

        // Input 1
        this.input1.value = ""
        this.input1.setAttribute("placeholder", "Masukkan Sisi (s)");
    
        // Input 2
        this.input2.style.display = "none";

        // Input 3
        this.input3.style.display = "none";
    };
    kelilingSegitigaDisplay () {
        // Hero
        this.heroHeader.innerText = "Segitiga"
        this.heroImage.setAttribute("src", "./assets/images/triangle.png");

        // Input 1
        this.input1.value = ""
        this.input1.setAttribute("placeholder", "Masukkan Sisi A (a)");
    
        // Input 2
        this.input2.style.display = "block";
        this.input2.value = ""
        this.input2.setAttribute("placeholder", "Masukkan Sisi B (b)");
    
        // Input 3
        this.input3.style.display = "block";
        this.input3.value = ""
        this.input3.setAttribute("placeholder", "Masukkan Sisi C (t)");
    };
    luasSegitigaDisplay () {
        // Hero
        this.heroHeader.innerText = "Segitiga"
        this.heroImage.setAttribute("src", "./assets/images/triangle.png");

        // Input 1
        this.input1.value = ""
        this.input1.setAttribute("placeholder", "Masukkan Sisi Alas (a)");
    
        // Input 2
        this.input2.style.display = "block";
        this.input2.value = ""
        this.input2.setAttribute("placeholder", "Masukkan Sisi Tinggi (t)");
    
        // Input 3
        this.input3.style.display = "none";
    };
};


// magical Calculator Function
const magicalCalculatorFunction = () => {
    // Validate Math Operation
    const calculateKelilingLingkaran = () => {
        if(input1.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Lingkaran(input1.value);
        shapesOperation.kelilingLingkaran();
    };
    const calculateLuasLingkaran = () => {
        if(input1.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Lingkaran(input1.value);
        shapesOperation.luasLingkaran();
    };
    const calculateKelilingPersegiPanjang = () => {
        if(input1.value === "" || input2.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new PersegiPanjang(parseFloat(input1.value), parseFloat(input2.value));
        shapesOperation.kelilingPersegiPanjang();
    };
    const calculateLuasPersegiPanjang = () => {
        if(input1.value === "" || input2.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new PersegiPanjang(input1.value, input2.value);
        shapesOperation.luasPersegiPanjang();
    };
    const calculateKelilingPersegi = () => {
        if(input1.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Persegi(input1.value);
        shapesOperation.kelilingPersegi();
    };
    const calculateLuasPersegi = () => {
        if(input1.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Persegi(input1.value);
        shapesOperation.luasPersegi();
    };
    const calculateKelilingSegitiga = () => {
        if(input1.value === "" || input2.value === "" || input3.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Segitiga(parseFloat(input1.value), parseFloat(input2.value), parseFloat(input3.value));
        shapesOperation.kelilingSegitiga();
    };
    const calculateeLuasSegitiga = () => {
        if(input1.value === "" || input2.value === "") {
            validateInput()
            return;
        }
        shapesOperation = new Segitiga(input1.value, input2.value);
        shapesOperation.luasSegitiga();
    };

    // Display and Math Operation
    // Default Display
    function defaultDisplay () {
        if(shapesOption.value === "Keliling Lingkaran") {
            setDisplay = new Display();
            setDisplay.lingkaranDisplay();
            hitungButton.addEventListener("click",calculateKelilingLingkaran);
        };
    };
    defaultDisplay();

    // Setting Display and Math Operation when option is selected
    shapesOption.addEventListener("change", () => {
        // Remove Current Event Listener
        hitungButton.removeEventListener("click", calculateKelilingLingkaran);
        hitungButton.removeEventListener("click", calculateLuasLingkaran);
        hitungButton.removeEventListener("click", calculateKelilingPersegiPanjang);
        hitungButton.removeEventListener("click", calculateLuasPersegiPanjang);
        hitungButton.removeEventListener("click", calculateKelilingPersegi);
        hitungButton.removeEventListener("click", calculateLuasPersegi);
        hitungButton.removeEventListener("click", calculateKelilingSegitiga);
        hitungButton.removeEventListener("click", calculateeLuasSegitiga);

        // Remove Value from Input
        resetOperation();

        // Setting Display and Math Operation Using Switch Conditional
        let shapesOptionValues = shapesOption.value
        switch (shapesOptionValues) {
            case "Keliling Lingkaran":
                setDisplay = new Display();
                setDisplay.lingkaranDisplay();
                hitungButton.addEventListener("click",calculateKelilingLingkaran);
                break;
            case "Luas Lingkaran":
                setDisplay = new Display();
                setDisplay.lingkaranDisplay();
                hitungButton.addEventListener("click", calculateLuasLingkaran);
            break;
            case "Keliling Persegi Panjang":
                setDisplay = new Display();
                setDisplay.persegiPanjangDisplay();
                hitungButton.addEventListener("click", calculateKelilingPersegiPanjang);
            break;
            case "Luas Persegi Panjang":
                setDisplay = new Display();
                setDisplay.persegiPanjangDisplay();
                hitungButton.addEventListener("click", calculateLuasPersegiPanjang);
            break;
            case "Keliling Persegi":
                setDisplay = new Display();
                setDisplay.persegiDisplay();
                hitungButton.addEventListener("click", calculateKelilingPersegi);
            break;
            case "Luas Persegi":
                setDisplay = new Display();
                setDisplay.persegiDisplay();
                hitungButton.addEventListener("click", calculateLuasPersegi);
            break;
            case "Keliling Segitiga":
                setDisplay = new Display();
                setDisplay.kelilingSegitigaDisplay();
                hitungButton.addEventListener("click", calculateKelilingSegitiga);
            break;
            case "Luas Segitiga":
                setDisplay = new Display();
                setDisplay.luasSegitigaDisplay();
                hitungButton.addEventListener("click", calculateeLuasSegitiga);
            break;
            default: 
                console.log("Default Setting");
            break;
        };
    });
};
magicalCalculatorFunction();