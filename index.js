// const puppeteer = require('puppeteer');

// puppeteer.launch().then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://zhuanlan.zhihu.com/p/340244131');
//   let body= await page.$('body')
//   await browser.close();
//   console.log(body)
// });

//引入puppeteer
const puppeteer = require("puppeteer");
//引入node文件系统模块(fs)
const fs = require("fs");
//引入node文件路径模块(path)
const path = require("path");
//创建爬取数据的函数

const {
    Image
} = require('image-js');


var images = require("images");



let getNewList = async () => {
    //创建一个Browser（浏览器）实例
    const browser = await puppeteer.launch();
    //在浏览器中创建一个新的页面
    const page = await browser.newPage();
    //打开百度新闻页面
    await page.goto("https://blog.csdn.net/qq_36641107/article/details/79424094");
    await page.setViewport({
        width: 1400,
        height: 800,
    });
    //等待“国内”导航按钮出现
    await page.waitForTimeout(1000);
    //通过evaluate函数执行自定义的js代码获取要爬取的数据
    await page.evaluate(() => {
        //创建一个空数组接收爬取的数据

        //获取所有即时新闻列表li元素
        let items = document.querySelectorAll("img");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          
            items[i].src = ''
            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("p");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("span");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          
            items[i].innerHTML = ''
            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("pre");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中
        }
        items = document.querySelectorAll("button");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("a");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("li");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("h1");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("h2");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("h3");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          

            if (items[i].style.position == '') {
                items[i].style.position = 'relative'
            }
            //将获取到的标题和链接地址添加到数组中

        }
        items = document.querySelectorAll("input");
        //利用循环将即时新闻列表的标题和链接地址添加到一个数组中
        for (let i = 0; i < items.length; i++) {
            //获取新闻的标签          
            let inputParent = items[i].parentNode;
            if (inputParent.style.position == '') {
                inputParent.style.position = 'relative'
                inputParent.setAttribute('class', 'inputparent')
            }
            //将获取到的标题和链接地址添加到数组中

        }

        return;

    });
    await page.addStyleTag({
        path: './test.css'
    })
    //关闭浏览器实例
    await page.screenshot({
        path: 'screenshot11.png'
    });
    await execute('screenshot11.png').catch(console.error);

    await browser.close();
    //返回爬取的数据
    return
}
async function execute(img) {
    let image = await Image.load(img);
    let grey = image
        .grey() // convert the image to greyscale.
        .resize({
            width: 1400,
            height: 800
        }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    return grey.save(`./dist/${img}`);
}

// getNewList()