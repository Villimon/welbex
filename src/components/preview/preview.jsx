import React from "react";
import PreviewItem from "./previewItem";

const data = [
    { if: 1, title: 'Виджеты', text: '30 готовых решений' },
    { if: 2, title: 'Dashboard', text: 'с показателями вашего бизнеса' },
    { if: 3, title: 'Skype Аудит', text: 'отдела продажи CRM системы' },
    { if: 4, title: '35 дней', text: 'использования CRM' },
]



const Preview = () => {
    return (
        <section className="preview">
            <div className="preview__container container">
                <div className="preview__left left-preview">
                    <div className="left-preview__body">
                        <h1 className="left-preview__title">Зарабатывайте больше
                            <br />
                            <span className="left-preview__title-gradient"> с WELBEX</span>
                        </h1>
                        <h3 className="left-preview__lable">Развиваем и контролируем продажи за вас</h3>
                    </div>
                </div>
                <div className="preview__right right-preview">
                    <div className="right-preview__body">
                        <h2 className="right-preview__title">
                            Вместе с <span className="right-preview__title-gradient">бесплатной консультацией</span> мы дарим:
                        </h2>
                        <div className="right-preview__flex">
                            {data.map(item => <PreviewItem key={item.id} item={item} />)}
                        </div>
                        <button className="right-preview__btn">Получить консультацию</button>
                    </div>
                </div>
            </div>
            <span className="preview__circle"></span>
        </section>
    );
}

export default Preview;
