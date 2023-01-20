import { useTranslation } from 'next-i18next';

const Hello = () => {
  const { t } = useTranslation('common');

  return (
    <main className="py-20">
      <div className="text-6xl font-bold tracking-tight">
        {t('intro.hello')}
        <br />
        {t('intro.name')}
      </div>
      <div className="pt-4 text-base font-medium text-black-500 dark:text-black-100">
        {t('intro.description')}
      </div>
    </main>
  );
};

export default Hello;
