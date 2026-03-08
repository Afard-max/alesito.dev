export interface Profile {
  name: string;
  titleKey: string;
  summaryKey: string;
  email: string;
}

export const profileData: Profile = {
  name: "Alexander Ruiz Diaz",
  titleKey: "profile.title", // Se mapeará dinámicamente en el Paso de i18n
  summaryKey: "profile.summary",
  email: "af.alexander.rd@gmail.com"
};