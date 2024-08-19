import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).send();
        }

        // Create and save a new user
        const newUser = new User(req.body);
        await newUser.save();

        // Respond with the newly created user object
        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong!" })
    }
}

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);

        console.log(user)

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong!" })
    }
}

const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const currentUser = await User.findOne({ _id: req.userId });
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export default {
    createCurrentUser,
    updateCurrentUser,
    getCurrentUser
}