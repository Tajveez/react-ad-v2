import Card from '../ui/Card/Card'
import FormCss from './MeetupForm.module.css'

const MeetupForm = () => {
    return (
        <Card>
            <form className={FormCss.form}>
                <div className={FormCss.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={FormCss.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={FormCss.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" />
                </div>
                <div className={FormCss.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id="description" rows="5"></textarea>
                </div>
                <div className={FormCss.actio}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default MeetupForm
