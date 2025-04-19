import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre es requerido" }),
  phone: z.string().min(8, { message: "Teléfono inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  date: z.string().min(1, { message: "Fecha requerida" }),
  time: z.string().min(1, { message: "Hora requerida" }),
  players: z.string().min(1, { message: "Número de jugadores requerido" }),
  equipment: z.string().min(1, { message: "Campo requerido" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Reservation = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      players: "",
      equipment: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "Reserva enviada",
        description: "Te contactaremos pronto para confirmar tu reserva.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu reserva. Intenta nuevamente.",
        variant: "destructive",
      });
      console.error(error);
    }
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="reserva" className="py-20 bg-[var(--tactical-dark)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow text-4xl font-bold mb-12 text-center section-heading inline-block mx-auto">RESERVA TU EXPERIENCIA</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="font-barlow text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-bullseye text-[var(--tactical-orange)] mr-3"></i> COMPLETA TUS DATOS
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Nombre completo</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Tu nombre completo" 
                            className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Teléfono</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="+56 9 1234 5678" 
                            className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Correo electrónico</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="tu@email.com" 
                          className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Fecha deseada</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Hora</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300">
                              <SelectValue placeholder="Selecciona hora" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="12:00">12:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="18:00">18:00</SelectItem>
                            <SelectItem value="20:00">20:00 (Nocturno)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="players"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Número de jugadores</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number"
                            min="4"
                            max="20"
                            placeholder="Mínimo 4 jugadores" 
                            className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="equipment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">¿Requiere equipo?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300">
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="si">Sí, necesitamos todo el equipo</SelectItem>
                            <SelectItem value="parcial">Parcial, tenemos algunas cosas</SelectItem>
                            <SelectItem value="no">No, tenemos nuestro propio equipo</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Mensaje adicional</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Cuéntanos detalles adicionales o preguntas que tengas..." 
                          className="bg-[var(--tactical-dark)] border border-gray-600 rounded-md px-4 py-3 focus:border-[var(--tactical-orange)] transition duration-300 h-32" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--tactical-orange)] text-white py-4 h-auto rounded-md font-semibold text-lg hover:bg-opacity-90 transition duration-300"
                  disabled={mutation.isPending}
                >
                  <i className="fas fa-paper-plane mr-2"></i> 
                  {mutation.isPending ? "Enviando..." : "Enviar Reserva"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="font-barlow text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-info-circle text-[var(--tactical-orange)] mr-3"></i> INFORMACIÓN IMPORTANTE
              </h3>
              
              <div className="bg-[var(--tactical-green)] bg-opacity-30 p-6 rounded-lg mb-8">
                <h4 className="font-barlow text-xl font-semibold mb-4">Proceso de reserva</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Completa el formulario con tus datos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Te contactaremos para confirmar disponibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Se solicita una seña del 50% para confirmar la reserva</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>El pago restante se realiza el día de la actividad</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[var(--tactical-orange)] bg-opacity-20 p-6 rounded-lg">
                <h4 className="font-barlow text-xl font-semibold mb-4">Recomendaciones</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-tshirt text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Usa ropa cómoda que pueda mancharse y calzado deportivo</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-sun text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Trae protector solar y gorra para días soleados</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-water text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Recomendamos traer hidratación adicional</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-clock text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>Llega 20 minutos antes para equiparte y recibir instrucciones</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-barlow text-xl font-semibold mb-4">Contáctanos directamente</h4>
              <div className="flex flex-col space-y-4">
                <a href="tel:+56912345678" className="flex items-center hover:text-[var(--tactical-orange)] transition duration-300">
                  <i className="fas fa-phone-alt mr-3 text-[var(--tactical-orange)]"></i>
                  <span>+56 9 1234 5678</span>
                </a>
                <a href="https://wa.me/56912345678" className="flex items-center hover:text-[var(--tactical-orange)] transition duration-300">
                  <i className="fab fa-whatsapp mr-3 text-[var(--tactical-orange)]"></i>
                  <span>WhatsApp: +56 9 1234 5678</span>
                </a>
                <a href="mailto:info@zonatactica.cl" className="flex items-center hover:text-[var(--tactical-orange)] transition duration-300">
                  <i className="fas fa-envelope mr-3 text-[var(--tactical-orange)]"></i>
                  <span>info@zonatactica.cl</span>
                </a>
                <a href="https://maps.app.goo.gl/" target="_blank" className="flex items-center hover:text-[var(--tactical-orange)] transition duration-300">
                  <i className="fas fa-map-marker-alt mr-3 text-[var(--tactical-orange)]"></i>
                  <span>Ubicación: Campo Táctico, Copiapó, Atacama</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
