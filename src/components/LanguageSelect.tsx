import type { LanguageCode } from "../types";

interface LanguageSelectProps {
  language: LanguageCode;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>;
}

const LanguageSelect = ({ language, setLanguage }: LanguageSelectProps) => (
  <div className="flex justify-end w-full mt-3">
    <div className="flex flex-col w-1/3 gap-1">
      <label htmlFor="language" className="pl-1 text-sm font-semibold">
        Select language:
      </label>

      <select
        id="language"
        value={language}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setLanguage(e.target.value as LanguageCode)
        }
        className="p-2 lang_input"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="de">Deutsch</option>
        <option value="fr">Fran&#231;ais</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="pt">Portugu&#234;s</option>
        <option value="ru">Russian</option>
        <option value="uk">Ukranian</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  </div>
);

export default LanguageSelect;
