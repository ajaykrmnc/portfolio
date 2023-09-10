import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'March 2022 - June 2022',
            title: 'Summer Intern at UrbanReach Pvt Ltd',
            subtitle: 'Software Developer',
            type: typeWork,
        },
        {
            id: 1,
            date: 'Dec 2020 - Present',
            title: 'Indian Institute of Technology Dhanbad',
            subtitle: 'Mathematics and Computing',
            type: typeSchool,
        },
        {
            id: 2,
            date: 'Jan 2018 – June 2020  ',
            title: 'Jawahar Navodaya Vidyalaya Bangalore Urban',
            subtitle: 'Intermediate',
            type: typeSchool,
        },
        {
            id: 3,
            date: 'Aug 2013 - July 2018',
            title: 'Jawahar Navodaya Vidyalaya Bihiya, Bhojpur',
            subtitle: 'Matriculation',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
