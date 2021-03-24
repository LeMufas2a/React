import React from 'react'
import './article.css'


export default class Article extends React.Component {
    render() {
        return (
            <main>
                <section className="container pt-5">
                    <div className="row">

                        <div className="col-6">
                            <img className="w-50" src="./img/toast.jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <h2>Mon premier article</h2>
                            <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus mollitia quia rem tempora consectetur impedit ullam, aliquid delectus minus tempore eum soluta? Dolore itaque cum eum nesciunt. Maxime ullam omnis enim voluptatem sequi alias molestias, aperiam in! Animi nam, praesentium aspernatur doloremque nisi ab blanditiis tempora numquam, consectetur, id cumque recusandae sit! Iusto cumque dolorem eius delectus blanditiis odit.</p>
                        </div>
                    </div>
                </section>
                {/* Section 2 */}
                <section className="container pt-5">
                    <div className="row">

                        <div className="col-6">
                            <img className="w-50" src="./img/toast.jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <h2>Mon premier article</h2>
                            <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus mollitia quia rem tempora consectetur impedit ullam, aliquid delectus minus tempore eum soluta? Dolore itaque cum eum nesciunt. Maxime ullam omnis enim voluptatem sequi alias molestias, aperiam in! Animi nam, praesentium aspernatur doloremque nisi ab blanditiis tempora numquam, consectetur, id cumque recusandae sit! Iusto cumque dolorem eius delectus blanditiis odit.</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}