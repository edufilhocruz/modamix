import { AdminAction } from "@/types/admin/action";

export async function fetchAdminActions(): Promise<AdminAction[]> {
  // Futuramente: buscar do backend
  return [
    {
      title: "Criar nova feira",
      desc: "Inicie o planejamento de um novo evento",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH24v4dZu-jH9Wc9dmdpDmXeWL120v8BagO6R7Xue_TCtEDRNDL-nO8iz8Qd-njowomfKd-qKNFvA23y77TXe8TIeHRg1cy4yMjtwTjv7dGW57btdfTNZe8Y0FEUAdF0mzPAN3YUdMCXzAE96wr8y7YqpMuIE3Lw6KQP6qSVhQ8lTca3iVGp4BsNaqfXn_VEAvd-W9x_ZwGf4j-M5Nwcqwx50Rm8ONPViV6QWtdkKdf5q5J0nXNPMnltu_DmCdIow_C2f2OftROtI"
    },
    {
      title: "Aprovar documentos",
      desc: "Revise e aprove documentos pendentes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB13dbXMkz1DeRw0nlN989kB-6oeVImDXdM6kQyYwAEA_92-_7hI002je7lNY0uhh1tM7EOplNGLF9o6evfEHdREELVGK64Vcghrm8fVL-bzgOHMALjpToakykvPR5nvxrl67YnQCxOT-grQ701kxDMuKGbPOYN8XpNOFt44l-zFdYy5mkl6tQFrTeTlwrppvg7CGGxHNDU6AFAZjR0RBCYUPzEAb3w5nI_Fqeayfb8l5ETqidMOkuwMavF8yCDYmlHtOV-JgJ_PyM"
    },
    {
      title: "Notificações",
      desc: "Gerencie as notificações do sistema",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJhi06rh8cGOa6wlOSIi8vIsZNghoz-hU_AG-hhGR_s-jIY1xreE9CUFx4Tj6lVb6p0FZA-FBmk3CRYQbfVn0S-7exsCmJYkbExlCdT4M1MlvQN7rCyfdem3oaYHBSKV6FE01WO1UKYtAZ28BR7KK-cccy5nZhzgz69FVGkdtnbYYzXPFZWVoXzsg-od5EKgjUBNHXC-4xiFR6SuhrAKWTdzquYvL6O7dgS7Q8G9luGKSdEovpUHbFZYECjCIGRNgwFHNaUCeyBUE"
    },
    {
      title: "Gerar Relatórios",
      desc: "Crie relatórios detalhados sobre as feiras",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE25F1PC5H0p-zfPBtRkm-ZxHmpEUghttDgW4yJh7gKor9B_uTh0tEH0BCgS5hQT0yb2eriqcDWhxcK-8k0hCl4VtVLAFc7S7J-L9YLuVqFueNPjAsccqOV16Uy6OlRsVukrpjnwRnD9h5abaUzFevJzlJKTuYfpuglQp6_w0L-zqcjd3_FEL2WxFJr9OPvF9ZOX9wzN4lCwiyRnljy_9q8mQC1sIt5hMKA4aH3m5nZrOtcnA50I0ydIPEZX6Gl1oJlLKv6wLGPkw"
    }
  ];
} 