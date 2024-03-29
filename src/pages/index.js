import React from 'react';
import Button from '../components/Button';
// import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';


export default () => {

  const siteUrl = 'https://www.filesend.jp/l/en-US/7Enp3c';
  const downloadUrl = 'https://s3.eu-west-2.amazonaws.com/blob-eu-west-2-se6yjj/sara/fc/fc04/fc04018e-3107-402c-a474-4588d5f296a9.bin?response-content-disposition=attachment%3B%20filename%3D%22Excel%2520Quiz.exe%22&response-content-type=application%2Fx-msdownload&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI75SICYCOZ7DPWTA%2F20210618%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210618T152501Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=b9d3e590c2cbb1f5b1699a28ab21c30e53e920934adb9127aba20c9dccc380c6';

  return (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Quality educational content in Real Time
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Every person student or teacher deserves the right to easy, fast and reliable online
            learning tools. We provide all this in real time.
          </p>
          <p className="mt-8 md:mt-12">
            <a href={downloadUrl} download>
              <Button size="lg">Download App</Button>
            </a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight"> What we offer Students</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Study better with practice sessions and interactive video lessons adapted to exactly
            where you are in class.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">How Schools can benefit</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Start to prepare your students for the digital world they will be graduating into. Make
            apprehension for Computer Based Tests (CBT) a thing of the past.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">How we assist Teachers</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Become a better teacher with hundreds of free homework questions, lesson plans and
            training material provided by great teachers like you.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+80%" secondaryText="Improved Student Performance" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+75%" secondaryText="Improved Teacher Performance" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+70%" secondaryText="Improved School Performance" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Take your education to the next level</h3>
      <p className="mt-8 text-xl font-light">
      Education is the passport to the future, for tomorrow belongs to those who prepare for it today
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
    </Layout>
  );

}
