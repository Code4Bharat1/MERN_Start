import { database, dbRef, push } from "../db/db.config.js";

// Dummy user for login simulation (Replace with DB query in real-world use)
// const storedUser = {
//     id: "juned khan",
//     passwordHash: bcrypt.hashSync("ABCDEF1234", 10) // Hashed password
// };

// // JWT Secret Key (Use env variables in production)
// const JWT_SECRET = "your_jwt_secret";

// // Login Function
const login = async (req, res) => {
    try {
        const { id, password } = req.body;

        if (!id || !password) {
            return res.status(400).json({ error: "ID and password are required" });
        }

        if (storedUser.id !== id) {
            return res.status(401).json({ error: "Invalid ID or password" });
        }

        const isPasswordValid = bcrypt.compareSync(password, storedUser.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid ID or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: storedUser.id }, JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Register Function
const register = async (req, res) => {
    try {
        const { id, password } = req.body;

        if (!id || !password) {
            return res.status(400).json({ error: "ID and password are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Hash the password

        // Save user data
        const userData = { id, password };
        const userRef = dbRef(database, "/students");
        const newUserRef = push(userRef, userData);

        return res.status(201).json({ message: "User registered successfully", userId: newUserRef.key });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export { register, login };
