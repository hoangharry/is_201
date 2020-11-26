import {Response, Request} from 'express'
import {movies, classifier} from './../models/generateDB'
import add from './../models/operation'

export const recommend = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    await add(body);
    classifier.train(body);
    let p = classifier.classify("movie", {
        age: +body.age,
        gender: +body.gender
    })
    console.log(p);
    let tmp = [];
    movies.forEach(ele => {
        tmp.push({id: ele, prob: p[ele.toString()]});
    });
    tmp.sort((a,b) => (a.prob < b.prob) ? 1 : ((b.prob < a.prob) ? -1 : 0));

    console.log(tmp);
    res.status(200).json({
        movies: [tmp[0]['id'], tmp[1]['id']]
    })

}