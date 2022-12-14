# 						**UI组件库 笔记**



## Avatar组件

#### 参数

```js
- src: "string"
- size: "48px"
- status: "online", "offline"
- statusIconSize: "8px"
```



## Icon组件

#### 先修知识点

- `hygen init self` 初始化

- `hygen component new Icon` 新建一个组件

- `FontAwesomeIcon` 可以兼容

#### 参数

```js
- icon:  svg组件（create-react-app支持从svg导出svg组件，不需要<img加载）
- height：12/"12"
- width：12/"12"
- color：
- opacity：
```

### 子组件Icon.Social

`<Icon.Social />`

```react
Icon.Social = Social;
{
  icon: "elementType"
  bgColor: "string"
  href: "string"
}

// Icon/SocialIcon/index.js
import "styled-component/macro" ;  //在index.js里使用css属性

function SocialIcon({ icon, bgColor, href, ...rest }) {
  return (
    <Button
      bgColor={bgColor}
      size="30px" 
      onClick={() => href && window.open(href, "_blank")}
      css={`
        &:hover {
          transform: none;     //取消掉按钮悬浮的scale
        }
      `}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
    </Button>
  );
}
```



## Badge组件（消息红点）

#### 先修知识点

###### variant变体

- 消息泡在侧边栏和主栏目的大小不一样

###### React children 

- 组件的实例化作为**闭合标签**，里面想填充东西是传不到组件定义的func的，只能通过props. 

  ```react
  // 组件定义
  function Button = (props)=>{
    return <button>{props.children}</button>
  }
  // 组件的实例化 使用
  <Button>
    这里文字可以直接渲染在button上
  </Button>
  // 组件实例化 另一种方式传递children直接当做属性用,但是要自闭和！****
  <Button children={"这里文字可以直接渲染在button"}/>
  
  ```

#### 自定义

- variant： 菜单列表的红点，和消息列表的未读消息数，是同一个组件的**两种变体**
  - 不带未读数为红点，带的显示数字。
  - 有children传进来，icon右上角的红点，否则显示count值

#### 参数

- children 
- count
- show
- showZero  消息为0是否显示

#### 返回值

`<Badge></Badge>` 有children写法 （无children自闭和）

#### 总结

- 抽离默认字体， 设置全局html的font-size: 62.5%, 因此1rem = 10px  设置story.css中默认字体1.4rem(14px)
- Variant一个组件的两个变体css
- 抽离圆形css为公共的mixin





## NavBar组件 - 菜单

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220901004042440.png" alt="image-20220901004042440" style="zoom:30%;" />

#### 先修知识点

- 需要用<Badge></Badge> 包裹Icon

#### 参数

- icon  
- active 是否激活
- showBadge 是否显示红点

#### 返回标签

`<StyledMenuItem> </StyledMenuItem>` 

#### 总结

- 新建`.storybook/.babelrc` 文件, 以使用"styled-components/macro" 把css作为属性
- `utils/mixins.js` 里面添加`activeBar(barWidth, shadowWidth)` &::before/after
- **激活状态**控制的两种方式
  - `activeBar()`传参 可以通过传入`{barWidth:0, shadowWidth:0}`控制阴影宽度
  - 或者只修改 `&::before,&::after{height: 0}` 的高度，选这种方法因为可以**设置高度动画**

## NavBar组件 - 侧导航

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220901154126505.png" alt="image-20220901154126505" style="zoom:30%;" />

#### 布局

- 头像1/5 ； MenuItem每个有固定高度，个数自定义；最下面的**设置**填充剩下所有高度

- `CSS grid`

#### 参数

- navSize：自定义宽度 🔅
- 其他的直接写死在index.js里了，如果需要增加图标需要修改。

#### 返回标签

`<NavBar> </NavBar>` 

```react
<NavBar>
  <Avatar />
  <MenuItems>
    <MenuItem />
    <MenuItem />
  </MenuItems>
  <Settings />
</NavBar>
```

#### 总结

- 在style.js文件里，修改组件内组件的样式，一定要引用到StyledAvatar

  ```react
  // 修改Avatar组件的样式，一定要引用StyledAvatar (包装过的)
  // 
  	${StyledAvatar}{
  		justify-self: center;
  		${StatusIcon}{
  			&::before{
  				background-color: ${({theme})=> theme.darkPurple };
  			}
  		}
  	}
  ```

- grid布局

  ```js
  display: grid;
  grid-template-rows: 1fr 4fr; // 头像占1/5, 剩下4/5 
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;   //前五个在74-88中间，最后一个占满剩下空间)
  ```



## Input基础组件

可使用在:  搜索框，发送消息框、、

#### 参数

```
- placeholder="请输入..." :
- prefix : 
- suffix : 
```



#### 返回标签

`<Input />`  和  `<Search />`

#### 子组件Search ⭐️

Search作为 Input 的子组件导出

```js
Input.Search = Search;   // Search组件作为Input的子组件导出
```

#### 总结

```css
/* 伪元素 */
const StyledInput = styled.input`
	height: 40px;
	width: 100%;
	border: none;
	background:none;
	color: ${ ({theme})=> theme.greyInput};
	font-size: ${({theme})=> theme.medium};
	display: block;   //? 为什么这里??
	// 伪元素
	&::placeholder{
		color: ${({theme}) => theme.greyPh};
	}
`;
```

```css
/* 点击类标签 的边框去掉  index.css	 */ 
input,
button,
select{
  outline: none;
}
```



## Text组件

#### 参数

```js
{
  type="primary": 颜色  // "primary","secondary","danger"
	size="normal": 尺寸   // "normal","medium","small/xsmall/xxsmall","large/..."
	bold:  bool 是否加粗
}
```

#### 返回标签

`<Text> </Text>`

#### 踩坑指南

```react
// "font-weight": 500  这个属性只对英文起作用
<Text size="xxlarge" type="danger" bold={false}>
  Container
</Text>
<Text size="xxlarge" type="danger" bold>
	英文可以加粗，中文不行orz
</Text>
```



## Paragraph组件

#### 参数

```js
//复用Text的style
{
  ellipsis: bool,   //是否省略段尾
}
```

#### 返回标签

`<Paragraph> </ Paragraph>`

#### 总结

- 复用Text组件的style:  在style.js里引入StyledText, 样式里不需要渲染标签

  ```js
  import StyledText from "components/Text/style"; //复用Text组件（的样式）
  const StyledParagraph = styled(StyledText)`
    ${({ ellipsis }) =>
      ellipsis &&
      css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;    //这里是ellipsis写法
      `}
  `; // 里面写Paragraph独有样式
  ```

  

- 避免太多`<div>`包裹，使用`<React.Fragment> `

  ```js
  export const Default = () => {
    return (
      <>
        <Paragraph>测试换行 </Paragraph>
        <Paragraph size="large">测试换行(large) </Paragraph>
      </>
  		// 也可使用<React.Fragment> </React.Fragment>
    );
  };
  ```

## Header组件

#### 参数

- Level: 1,2,3,4,5,6



## 下拉选项组件 - 过滤Select

- Option组件不能单独使用

#### 参数 

- 无

#### 返回标签

`<Select>{Options...}</Select>`

#### 总结

- 去掉默认select的下拉图标

  ```js
  //   -moz-appearance, -webkit-appearance  分别隐藏firefox/chrome(被react给封装在appearance里)
  //   -ms-expand 隐藏ie
  const StyledSelect = styled.select`
    appearance: none; 
    ::-ms-expand {
      display: none; //ie隐藏
    }
  `
  ```

  

## Button组件

- 悬浮按钮
- 两种变体<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220903172752520.png" alt="image-20220903172752520" style="zoom:30%;" />

#### 参数

```js
{
  type: "primary",   // "primary"  后面可以定制
	shape: "circle",    // circle(默认) / rect 
  size:  "30px" 						// 尺寸
  bgColor:          //背景色
}
```

#### 总结

- 按钮悬浮变大 动画

  ```css
  transform: scale(1);
  transition: 0.4s;
  &:hover{
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);  //阴影
  }
  ```

  

## Filter组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220905145529190.png" alt="image-20220905145529190" style="zoom:50%;" />

#### 参数

```js
{
  label: "xxx",
}
```



#### 子组件导出

```html
<Filter>
	<Filter.Filters label="列表排序"> 
    <Text>{label}</Text>
    {children}
  </Filter.Filters>
	<Filter.Action label="新增会话">
    <Text>{label}</Text>
    {children}
  </Filter.Action>
</Filter>
```



## MessageCard 消息卡片组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220905150538401.png" alt="image-20220905150538401" style="zoom:30%;" />

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220905150633468.png" alt="image-20220905150633468" style="zoom:30%;" />

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220905150731531.png" alt="image-20220905150731531" style="zoom:30%;" />

#### 参数 🆘

```json
- avatarSrc,
- avatarStatus,
- statusText,
- name,
- time,
- message,
- unreadCount,
- active: bool
- replied: bool
```



#### Grid命名布局

调用card( ) 设定一组背景色和边框

```css
const StyledMessageCard = styled.div`
  
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr; //第一列64px 剩下平分
  row-gap: 15px;
  background: ${({ theme }) => theme.background};
  transition: 0.4s;
  ${StyledAvatar} {
      grid-area: avatar;   //头像占位
  }
`
```

## MessageList 消息列表

`组装 Search, Filter，MessageCard`

#### 参数

`无`

#### 标签

` <MessageList />`

#### 总结

```react
// ChatList作为包裹MessageCard的容器，设定卡片之间的间距
// style.js
import StyledMessageCard from "components/MessageCard/style";
const ChatList = styled.div`
  ${StyledMessageCard} {
    margin-bottom: 20px; //设置单个card下边距
  }
`;

//index.js
<ChatList>
  {[1, 2, 3, 4, 5, 6].map((val, idx) => (
    <MessageCard
      key={idx}
      avatarSrc={face2}
      avatarStatus="online"
      name="Cindy"
      statusText="在线"
      time="三小时前"
      message="哈哈哈哈哈哈哈"
      unreadCount={2}
      active={idx === 3}
      replied={idx % 3 === 0}
      ></MessageCard>
  ))}
</ChatList>    
```



## TitleBar组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220906153703901.png" alt="image-20220906153703901" style="zoom:50%;" />

#### 参数

```json
- status: "online", "offline"
```

#### 标签

`<TitleBar />`



## ChatBubble 会话气泡组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220906175901489.png" alt="image-20220906175901489" style="zoom:30%;" />

#### 参数

```json
- type: "mine"  默认无
- time: "下午 14:04"
```

#### 标签

`<ChatBubble> text </ChatBubble>`

```html
<StyledChatBubble type={type} {...rest}>
  <Bubble>
  	<BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
  	<MessageText>{children}</MessageText>
  </Bubble>
  <Time>{time}</Time>
</StyledChatBubble>
```



#### 总结

- 默认不显示，有type="mine"才显示

  ```js
  ${({ type }) => type && typeVariants[type]};
  ```



## VoiceMessage语音组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220906180008563.png" alt="image-20220906180008563" style="zoom:20%;" />

#### 参数

```json
- type: "mine"   默认无
- time: "01:24"  时长
```

#### 标签

- 作为ChatBubble的子组件存在

  ```react
  <ChatBubble time="昨天 下午14:04" type="mine">
  	<VoiceMessage time="02:12" type="mine" />
  </ChatBubble>
  ```

#### 总结

- Css选择器 选第一个child

  ```css
  const StyledVoiceBubble = styled.div`
    // 第一个孩子 (最左侧的Play-icon)
    & > *:first-child {
      flex-shrink: 0;
    }
  
    & > *:not(:first-child) {
      margin-left: 16px;
    }
  `;
  ```

  

## Emoji组件

#### 参数

```json
- label: "smile"  emoji的名字
```

#### 标签

`<Emoji label="clock">⏰</Emoji>`





## Popover组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220907120840151.png" alt="image-20220907120840151" style="zoom:30%;" />

- **只是一个弹出层 （类似ChatBubble 在所有层之上）**

#### 参数

```
- content: any 可以是任何
- offset: 偏移
```

#### 标签

```react
<Popover content="hello" >
  {children}
</Popover>
```



#### 总结

- StyledPopover使用relative定位，里面的东西使用absolute定位

- 把要被附加的组件放在`{children}`里

  ```react
  <Popover ....>
    <Button>被附加的按钮</Button>
  </Popover>
  ```

- 三角形套路

  <img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220907141849301.png" alt="image-20220907141849301" style="zoom:30%;justify-self:left" />

  ```react
  //三角形套路
  const Triangle = styled.div`
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${({ theme }) => theme.background} transparent transparent
      transparent;
    left: calc(50% - 6px);
    bottom: calc(100% + 12px - 6px);
  `;
  ```

- `visible`的toggle  (useState)

  ```js
  function Popover({ children, content, offset, onHide, onVisible, ...rest }) {
    const [visible, setVisible] = useState(false); //默认不显示
    const handleClick = () => {
  		if (visible){
  			setVisible(false);
  			onHide && onHide(); //有函数的话，调用即可
  		}
  		if (!visible){
  			setVisible(true);
  			onVisible && onVisible(); //有函数的话，调用即可
  		}
    };
    
    return (...)
  }
  ```



## Footer组件（组）

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220907152709603.png" alt="image-20220907152709603" style="zoom:40%;" />

#### 参数

`无`

#### 标签

`<Footer />`

```react
<StyledFooter {...rest}>
      <Input
        placeholder="想说的话..."
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.grey}
              />
            </Popover>

            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon icon={PlaneIcon} color="white" />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
```

#### 总结

- 符合html语义化规则 `const StyledFooter = styled.footer``;  //符合html语义化规则`

- `useState()` 控制SmileIcon的状态，是否为灰色

  ```react
  // 无popover时候，smile为灰色 - 通过onVisible和onHide设置回调
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  
  <Popover
  	content={<PopoverContent />}
  	offset={{ x: "-25%" }}
  	onVisible={() => setEmojiIconActive(true)}
  	onHide={() => setEmojiIconActive(false)}    //为onHide设置回调，改变emojiIcon状态
  >
    <Icon icon={SmileIcon} color={emojiIconActive ? undefined : theme.grey} />  //改Smile颜色
  </Popover>
  ```



## Conversation 会话窗口组件（组）

#### 参数

`无`

#### 总结

- 一些样式

```css
/* 改容器下最后一个孩子*/
& > *:last-child {
    align-self: end;
}

/* flex  */
const Conversations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;    /*垂直方向 上靠*/

  padding: 10px 15px;
  width: 100%;
  flex: 1;          /* 容器为浮动高度（高度不固定，会撑满父级剩下的所有位置）*/  
`;
```

## 

## 个人资料组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220908111307172.png" alt="image-20220908111307172" style="zoom: 33%;" />

- **Grid布局**【align-items 和align-content 区别】https://blog.csdn.net/ks795820/article/details/125530818

### 头像+个人信息

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220908122559937.png" alt="image-20220908122559937" style="zoom:33%;" />

### 社交信息

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220908145943134.png" alt="image-20220908145943134" style="zoom:50%;" />

- 单独搞个组件`<Icon.Social/>`

  ```react
  <SocialLinks>
    <Icon.Social
      icon={faWeibo}
      bgColor="#F06767"
      href="http://www.weibo.com"
    />
    <Icon.Social icon={faGithub} bgColor="black" />
    <Icon.Social icon={faWeibo} bgColor="#2483C0" /></SocialLinks>
  ```

- `window.open(url, "_blank")`  第二个参数表示在新的`_blank`还是当前 `_self`窗口打开url链接

### 联系信息

```react
<ContactSection>
  <Description label="联系电话"> +86 13048063227</Description>
  <Description label="电子邮件"> cindy@gmail.com</Description>
  <Description label="个人网站"> www.cindy.com</Description>
</ContactSection>

const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;
```



### 相册

```css
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;    /*自动缩放*/
`;
```



## Seperator 分割线组件

分割线模板代码

```css
div{
	width: 100%;
  height: 1px;
  border-bottom: 1px solid color;
}
```



## 🔅🔅🔅 设置页面 🔅🔅🔅



## InputText组件

#### 参数

```js
- label: "" 可有可无
```

#### 输出标签

```react
<Input.Text label />
```



#### LabelContainer组件

```react
// 这里的children可以是<input/> 或者别的什么checkbox
function LabelContainer({ children, label, ...rest }) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  );
}
```

#### InputUnderline样式组件

就是一个样式包裹的<input/>

```css
const InputUnderline = styled.input`
  border: none;   /*去掉边框并 只加下边框*/
  border-bottom: 1px solid ${({ theme }) => theme.greyBox};
  font-size: ${({ theme }) => theme.normal};
  width: 100%;
  background: none;   /*背景色置空*/
 
  & > ::placeholder {
    color: ${({ theme }) => theme.grey5};
  }

  /*focus时改变下边框颜色*/
  :hover,
  :focus {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;
```



## Select 表单组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220909103805034.png" alt="image-20220909103805034" style="zoom:50%;" />

重构Select组件

#### 参数

```react
- label: "自定义label"
- type: "form" //暂时只有一个form
```



## Radio单选按钮组件

#### 参数

```js
- name: "sex"
```

#### 返回标签

```react
<Radio name="sex" >女</Radio>
```

#### 子组件Radio.Group

```react
<Radio.Group label="请选择城市" >
  <Radio name="city">广州</Radio>
  <Radio name="city">深圳</Radio>
</Radio.Group>
```

#### 样式

- 伪类覆盖原来的样式，过渡`scale()`

  ```css
  /* 一组Radio的容器 */ 
  const StyledRadioGroup = styled.div`
    display: flex;
    /* 除了第一个孩子，后面的左边距 */ 
    & > *:not(:first-child) {
      margin-left: 24px;
    }
  `;
  
  /* 完全隐藏自带的选中圈 */
  const RadioButton = styled.input.attrs({ type: "radio" })`
    width: 0;
    height: 0;
    opacity: 0;
    /*选中状态，对邻居<Circle/>的::after做更改 */
    &:checked + ${Circle}::after {
      opacity: 1;
      transform: scale(1);
    }
  	/* （非选中同理） */
    &:not(:checked) + ${Circle}::after {
      opacity: 0;
      transform: scale(0);
    }
  `;
  ```

### 

## Switch 滑动按钮组件🥳

参数

`无`

标签

```html
<StyledSwitch></StyledSwitch> 渲染为<label></label>

```

#### 总结

- 伪元素 `::before, ::after`

  ```css
  div::before, div::after{
    content: "";   //必须有
    display:      // 不设置的话，默认为inline
  }
  ```

- Checkbox为实际控制，Slider为样式滑动槽

  ```css
  /*伪类checked被选中的时候，设置邻居Slider的样式 （背景色改变，::before位移右移20px)*/
    &:checked + ${Slider} {
      background-color: ${({ theme }) => theme.green2};
      // 原型右移
      &::before {
        transform: translateX(20px);
      }
    }
  ```

  

## EditProfile 个人资料编辑

#### 重构Profile组件

- 先给Profile组件新增几个属性： 

  ```js
  - showEditBtn:    bool 是否显示编辑按钮
  - showCloseIcon = true    默认true, 是否显示关闭按钮
  - onEdit:   func 编辑状态回调
  - status:   "online","offline"
  ```

- 两个状态：

  - 默认 

    ```js
    showEditBtn = true
    showCloseIcon = false
    ```

  - 编辑

    ```js
    showEditBtn = false
    showCloseIcon = true
    ```

#### UseState hook

- 管理 isEdit状态

  ```react
  const [isEdit, setIsEdit] = useState(false);  //默认非编辑状态
  
  // 根据isEdit状态选择返回值 为false,直接返回<Profile/>, 
  // 否则返回<StyledEditProfile> {Children} </<StyledEditProfile>   --未完
  if (!isEdit){
      return (
        <Profile
          showEditBtn
          showCloseIcon={false}
          onEdit={() => setIsEdit(true)}
        />
      ); 
  } else{
    return <StyledEditProfile {...rest}>{children}</StyledEditProfile>;
  }
    
  ```

#### 个人资料编辑组件

 

## 设置项组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220911164457431.png" alt="image-20220911164457431" style="zoom:40%;" />

### SettingsItem组件

每一行的选项Item

#### 参数

```js
 - type = "switch", "menu"
 - label:    string
 - description:   string
 - {children}
```

#### 样式

```css
// 布局样式用
const StyledSettingsItem = styled.div``;

// 每一个Item的容器
const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`;
```

### Settings组件

整个容器，分两部分

- 隐私设置 
- 通知设置



## BlockedList 屏蔽列表

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913111952360.png" alt="image-20220913111952360" style="zoom:30%;" />

#### 参数

`无`

#### 返回标签

```react
<BlockedList/>
```

#### 总结

- Grid布局同时可以做：规整的布局，和不规整布局

  ```css
  /*规整 列表*/
  const FriendList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 24px;
    /* justify-content: center; */ //这个无用
    justify-items: center;
  `;
  
  /* 不规整的 标题*/
  const SettingsMenu = styled.div`
    height: 148px;
    display: grid;
    grid-template-columns: 10px 1fr;
    align-items: center;
  
    ${StyledText} {
      /* grid-column: span 1/-1; //让在整个屏幕居中 */
      justify-self: center;
    }
  `;
  ```

  

## FilterList 抽离过滤列表

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913141623257.png" alt="image-20220913141623257" style="zoom:30%;" />

几个的区别

- 过滤选项 <img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913141515310.png" alt="image-20220913141515310" style="zoom:40%;" />
- 动作按钮是否存在 <img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913141452743.png" alt="image-20220913141452743" style="zoom:40%;" />
- 展示的列表内容 

#### 参数

```js
- options:     list[ ]   过滤选项的值
- optionLabel: "string"  过滤选项label
- actionLabel: "string"  动作按钮label (没传就不显示)
```



## ContactList 联系人列表

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913153908989.png" alt="image-20220913153908989" style="zoom:33%;" />

#### ContactCard组件

- 样式

```css
const StyledContactCard = styled.div`
  ${card()}   /* card的mixin */
  display: grid;
  grid-template-areas:
    "avatar name"
    "avatar intro";
  grid-template-columns: 64px 1fr;
  /*放头像的位置*/ 
  ${StyledAvatar} {
    grid-area: avatar;
  }
`;
```

- 返回标签

```react
<ContactCard
    avatarSrc={face}
    status="online"
    name="Tom"
    intro="this is the introduction"
/>
```

#### ContactList 组件

##### 返回标签

`<ContactList />`

##### 样式

```react
<FilterList
        options={["最新添加", "姓名排序"]}
        optionLabel="列表排序"
        actionLabel="添加好友"
      >
        <Contacts>
          {new Array(10).fill(0).map((val, id) => (
            <ContactCard
              key={id}
              avatarSrc={face}
              status="online"
              name={`name${id}`}
              intro="this is the introduction"
            />
          ))}
        </Contacts>
      </FilterList>
```



## FileList 文件列表

### FileCard 组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913171619904.png" alt="image-20220913171619904" style="zoom:50%;" />

- 参数

  ```js
   - icon, 
   - name, 
   - size, 
   - time
  ```

### FileList组件

##### 参数

```js
- options ['',''...]
- optionLabel="列表排序"
- actionLabel="添加文件"
```

##### 返回标签

`<FileList />`



## NoteList 笔记列表组件

### NoteCard 组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220913183855406.png" alt="image-20220913183855406" style="zoom:30%;" />

#### 参数 

```
imgSrc, 
name, 
abs, 
time
```

##### 样式

```css
/* 图片缩放 */
const NoteImage = styled.img`
  grid-area: img;
	width: 60px;
	height: 60px;
	object-fit: cover;  
`;
/* 摘要 超长部分省略 */
const NoteAbstract = styled(Paragraph).attrs({ size: "small", ellipsis: true })`
  grid-area: abs;
  align-self: center;
`;
```

### NoteList 组件

#### 返回标签

`<NoteList />`

## VideoCall 视频通话组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220914132251790.png" alt="image-20220914132251790" style="zoom:20%;" />

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220914132335668.png" alt="image-20220914132335668" style="zoom:30%;" />

#### 参数

`无`

#### 总结

- 点击按钮Minimise和返回按钮，切换两种状态，使用useState(true)
- Grid-area使用地方： 1. style.js  2. Index.js / css={` `}
- Grid-area 使用名字和数字，等价

#### 样式

- 最小化的界面，因为只有外层一个容器，里面的grid-area 如果在style里改，会出现有的标签重复出现（Paragraph), 因此使用css/macro

```css
/* 最小化后的界面*/
const VideoCallAlert = styled.div`
  width: max-content;  
  display: grid;
  align-content: center;
  grid-template-areas:
    "av name    name"
    "av action  icon";
  row-gap: 5px;
  column-gap: 10px;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.greyBox};
  z-index: 200;  /* 为使得悬浮在最上层 */
  ${card()}      
  /* ${StyledAvatar} {
    grid-area: av;     // 这里不好取Paragraph的，但是Avatar只出现一次所以ok
  } */
`;
```

- 背景图片src 作为属性传进去 并且fit和居中

  ```css
  background-image: url(${({ src }) => src});  //居中显示背景图
  background-position: center;
  background-size: cover;
  ```

- grid-area 的名字写法

  ```css
  grid-area: actions/title;  /* actions所在行号 和title所在列号 */
  grid-area: 2/1/3/3      /*等价*/
  ```

  

## Dropdown组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220914135638370.png" alt="image-20220914135638370" style="zoom:30%;" />

#### 参数 (类popover)

```js
- align: "right(默认)", "top","bottom",... 偏移方向
- content: any
- {children} : 要附加的主
```

#### 返回标签

```react
<Dropdown>{children}</Dropdown>
```

#### 总结

-  文字不换行 ：`white-space: nowrap; `

- 给最外层的SyledDropdown绑定监听事件，visible属性传给Container

  ```react
  function Dropdown({ content, align = "right", children, ...rest }) {
    const [visible, setVisible] = useState(true);   // 默认显示
    return (
      <StyledDropdown onClick={() => setVisible(!visible)} {...rest}>
        {children}
        {content && (
          <DropdownContainer visible={visible} align={align}>
            {content}
          </DropdownContainer>
        )}
      </StyledDropdown>
    );
  }
  ```

  

## ChatApp 最终组件

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220914163153286.png" alt="image-20220914163153286" style="zoom:30%;" />





----

# ReactRouter

```js
// 安装 react-router-dom 核心库
npm install react-router-dom 基础使用场景
```

#### 基础使用 

exact为精确匹配， 当有二级路由时不能使用

```react
<Route exact path="/">
  <MessageList />
</Route>
<Route exact path="/contacts">
  <ContactList />
</Route>
<Route path="/settings">
  <EditProfile />      {/* 这里不是精确匹配，因为有二级路由 */}
</Route>

// 添加to属性，把a标签改成Link(最后还是渲染成a, 添加了路由功能，to={ })
function MenuItem({ to, icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      {/* eslint-disable-next-line  */}
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active} {...rest} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}
```

#### Switch / Routes

为了避免匹配上的都会显示，例如`/`, `/settings` 会同时显示

```jsx
// v5
<Switch>
  <Route exact path="/">
  	<MessageList />
  </Route>
  <Route exact path="/contacts">
    <ContactList />
  </Route>
</Switch>
// v6 换成Routes标签
```

#### 双感叹号转bool

```js
// v5版本  matchPath()返回一个match到的对象 双！转布尔
const active = !!matchPath(loc.pathname, {
  path: to,
  exact: true,
  strict: true,    
})

// v6参数互换，exact转为 end
const activeV6 = !!match({
  path: to,
  end: true,
}, loc.pathname)
```

#### Link 组件

`Link 组件最终会渲染为 HTML 标签 <a>` 它的`{to, query, hash}` 属性会被组合一起渲染成`href`属性。 虽然`Link`被渲染成超拦截，但在内部实现使用脚本拦截了浏览器的默认行为，然后调用`history.pushState()`

### 导航路由



？为什么hover有效果但点击无效





### 内容区路由

- 使用`/settings/* `替代`/settings `可以使得`settings/blocked`也匹配上，这样屏蔽好友列表的页面显示时，左边的`sideBar`还是会显示`EditProfile`组件

```jsx
<SideBar>
  <Routes>
    <Route path="/settings/*" element={<EditProfile />} />
		<Route path="/settings" element={<EditProfile />} />     /*原来的写法*/
  </Routes>
</SideBar>

```

- BlockedList组件里的返回按钮添加监听，

  ```js
  import { useNavigate } from "react-router-dom"; //代替useHistory
  function BlockedList({ ...rest }) {
    // 编程式控制路由
    const navigate = useNavigate(); //
    return (
      <StyledBlockedList {...rest}>
        <SettingsMenu>
          <Icon
            icon={ArrowLeft}
            css={`
              cursor: pointer;
            `}
            onClick={() => navigate(-1)}  // 回退
          />
    
  ```

- 抽屉滑出，关闭

  ```react
  // 在chatApp最外层组件存放状态
  const [showDrawer, setShowDrawer] = useState(false);
  
  /* 给Drawer添加一个show属性 showDrawer传进去 控制样式的width */
  <Drawer show={showDrawer}>
    <Profile onCloseClick={() => setShowDrawer(false)} />
  </Drawer>
  
  // 🐬 抽屉滑出
  // 点击Conversation里的头像滑出抽屉，给Conversation传递一个属性onAvatarClick={()=>}, 继续传给TitleBar, 最后传给Avatar作为onClick的回调.
  <Route path="/*" 
    element={<Conversation onAvatarClick={() => setShowDrawer(true)} />}
  />
  <TitleBar onAvatarClick={onAvatarClick} />
  <Avatar onClick={onAvatarClick} src={face} status={status} />
  
  
  // 🐬 抽屉关闭
  // Profile添加一个属性onCloseClick={()=>}, 传给CloseIcon的属性作为onClick的回调.
  <Profile onCloseClick={() => setShowDrawer(false)} />
  <CloseIcon icon={Cross} onClick={onCloseClick} />
  ```

  

### 视频通话

点击挂断Icon会调用 `setShowVideo(false)`

点击TitleBar里的VideoIcon会 调用 `setShowVideo(true)`

### Bonus 🥑

- 实现FriendList的CloseIcon

  - ```js
    const newArray = Array.filter((val,idx,array)=>{ })  //Array.filter
    ```

    ```react
      // 控制FriendList的状态数组 (初始8个)
      const initFriends = [];
      for (let i = 0; i < 8; i++) {
        initFriends.push({
          id: i,
          name: `好友${i}`,
        });
      }
      const [friends, setFriends] = useState(initFriends); //不能用idx作为key
      // 删除函数，删掉第idx项
      const onHandleDelete = (idx) => {
        setFriends(friends.filter((val, i) => val.id !== idx));
      };
    
    <FriendList>
      {friends.map((friend) => (
        <ClosableAvatar
          key={friend.id}
          onClick={() => onHandleDelete(friend.id)}
          >
          <BlockedAvatar src={face} size="105px" />
          <CloseIcon width={46} height={51} icon={CloseCircle} />
          <BlockedName>{friend.name}</BlockedName>
        </ClosableAvatar>
      ))}
    </FriendList>
    ```

    

# ReactSpring 动画

<img src="/Users/wangbo/Library/Application Support/typora-user-images/image-20220916172337704.png" alt="image-20220916172337704" style="zoom:50%;" />

### Staggered Animation

- 导入

  ```js
  // 设置spring动画 useTrail 这个hook
  import { useTrail, animated } from "react-spring";
  ```

- 配置动画

  ```js
  //这里使用hook来配置动画, 返回数组
  const trailAnimes = useTrail(6, {
      transform: "translate3d(0px,0px,0px)",
      from: {
        transform: "translate3d(-50px, 0px,0px)",
      },
      config: {
        mess: 0.8,
        tension: 280,
        friction: 20,
      },
      delay: 200,
    });
  ```

- 在外面包裹动画

  ```react
  {[1, 2, 3, 4, 5, 6].map((val, idx) => (
    <animated.div key={idx}  style={trailAnimes[idx]}>
      <MessageCard
        key={idx}
        avatarSrc={face1}
        ...
        />
    </animated.div>
  ))}
  ```

### 新版 Spring-v9 

- 不需要根据路径名生成唯一的key, 跟组件结合会自动生成key

- `useTransition(location, {})` 不需要第二个参数（原为key)
