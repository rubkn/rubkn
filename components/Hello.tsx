import { useTranslation } from 'next-i18next';

const Hello = () => {
  const { t } = useTranslation('common');

  return (
    <main className="py-12">
      <div className="text-6xl font-bold tracking-tight">{t('hello')}</div>
      <div className="py-6 text-lg font-semibold text-black-500 dark:text-black-100">
        {t('intro')}
      </div>
    </main>
  );
};

export default Hello;
