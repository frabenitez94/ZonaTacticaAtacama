import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post("/api/reservations", async (req: Request, res: Response) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json({ 
        message: "Reserva creada exitosamente", 
        data: reservation 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Error de validación", 
          errors: validationError.message 
        });
      } else {
        console.error("Error al crear reserva:", error);
        res.status(500).json({ 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  app.get("/api/reservations", async (req: Request, res: Response) => {
    try {
      const reservations = await storage.getAllReservations();
      res.status(200).json(reservations);
    } catch (error) {
      console.error("Error al obtener reservas:", error);
      res.status(500).json({ 
        message: "Error interno del servidor" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
