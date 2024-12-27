"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export default function Support() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Aqui você pode implementar o envio do email
      console.log(data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Suporte IA Design</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Como podemos ajudar?</h2>
        <p className="text-gray-700 mb-4">
          Estamos aqui para ajudar você com qualquer dúvida ou problema que possa ter. 
          Entre em contato conosco através de um dos canais abaixo:
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
            <a 
              href="mailto:suporte@iadesign.com.br" 
              className="text-blue-600 hover:underline"
            >
              suporte@iadesign.com.br
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">📱 WhatsApp</h3>
            <a 
              href="https://wa.me/558134657389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +55 (81) 3465-7389
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">⏰ Horário de Atendimento</h3>
            <p className="text-gray-700">
              Segunda a Sexta: 09:00 - 18:00<br />
              Sábado: 09:00 - 13:00
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-lg mb-4">Envie uma mensagem</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Seu nome"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div>
              <Input
                placeholder="Seu email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <Input
                placeholder="Assunto"
                {...register("subject")}
                className={errors.subject ? "border-red-500" : ""}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">{errors.subject.message}</span>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Sua mensagem"
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
                rows={5}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
} 