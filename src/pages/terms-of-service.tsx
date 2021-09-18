import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const content = `<div className="markdown-container py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">

**最后更新：2021 年 9 月 13 日**

<br />

LIANHE.ART 是由 联合互娱（北京）文化有限公司(“联合互娱”) 注册并所有的商标，<a rel="noreferrer noopener" target="_blank" href="https://lianhe.art" class="primaryColor">lianhe.art</a>、<a rel="noreferrer noopener" target="_blank" href="https://lianehuyu.com" class="primaryColor">lianehuyu.com</a>、<a rel="noreferrer noopener" target="_blank" href="https://16345.net" class="primaryColor">16345.net</a> 是由联合互娱所有的网站。

<br />

我们使用「指定国家/地区」指代欧盟 (EU) 和欧洲经济区 (EEA) 的国家/地区以及中国香港、中国澳门、中国台湾。

<h2 className="text-4xl my-6">网站所有权；对使用条款的同意</h2>

本使用条款和条件 (“使用条款”) 适用于位于 <a rel="noreferrer noopener" target="_blank" href="https://lianhe.art" class="primaryColor">lianhe.art</a>、<a rel="noreferrer noopener" target="_blank" href="https://lianehuyu.com" class="primaryColor">lianehuyu.com</a>、<a rel="noreferrer noopener" target="_blank" href="https://16345.net" class="primaryColor">16345.net</a> 的 LIANHE.ART 网站以及由 [联合互娱（北京）文化有限公司、其分支机构和附属机构]() 链接到 LIANHE.ART 的所有关联网站，包括全世界的 LIANHE.ART 网站 (统称“网站”)。网站是 联合互娱（北京）文化有限公司 及其许可方的财产。要使用本网站的，你应该阅读这些“使用条款”，访问和/或使用 LIANHE.ART 网站及其关联网站的，即表示你同意本使用条款；如果你不同意，请断开连接并停止使用本网站。

<br />

LIANHE.ART 有权随时自行决定更改、修改、添加或删除本使用条款的部分内容。你有责任定期检查本使用条款，以了解是否发生了更改。如果你在更改发布后继续使用本网站，即表示你接受并同意这些更改。只要你遵守本使用条款，LIANHE.ART 即授予你个人、非排他性、不可转让、有限的权利进入和使用本网站。你声明：你拥有法定权力代表自己和你代表的任何一方接受这些使用条款。如果不同意这些使用条款，请不要使用本网站。

<h2 className="text-4xl my-6">内容</h2>

本网站上包含的所有文字、图片、用户界面、可视化界面、照片、商标、徽标、声音、音乐、艺术作品和计算机代码 (统称“内容”)，包括但不限于此类内容的设计、结构、选择、搭配、表达、外观、风格以及排列形式，除用户自行上传或额外声明以外的内容，均由 LIANHE.ART 所有、控制或授权，或者授权给 LIANHE.ART，并且受到商业外观、版权、专利和商标法以及各种其他知识产权和反不正当竞争法的保护。

<br />

除非本使用条款明确规定，否则，未经 LIANHE.ART 明确事先书面同意，不得以任何形式对本网站的任何组成部分或任何内容进行拷贝、复制、重新发布、上传、发布、公开展示、编码、翻译，也不得将其传输或分发 (包括“镜像”) 到任何其他电脑、服务器、网站或者其他用于发布或分发的媒介或任何商业企业的媒介。

<br />

你可以使用由 LIANHE.ART 有意提供、专供从网站上下载的关于 LIANHE.ART 产品和服务的信息 (例如数据表、知识库文章和类似材料)，但前提是你： (1) 不删除此类文稿任何副本中的任何所有权声明用语；(2) 仅将此类信息用于个人非商业信息用途，并且不得在任何联网计算机上拷贝或发布此类信息或在任何媒介上进行广播；(3) 不对任何此类信息进行修改；并且 (4) 不对此类文稿做出任何附加陈述或保证。

<h2 className="text-4xl my-6">你对本网站的使用</h2>

你不得使用任何“深层链接”、“网页搜罗”、“网页机器人”、“网页采集工具”或其他自动设备、程序、算法或方法，或者任何类似或同等的手动流程来访问、获取、拷贝或监控本网站的任何组成部分或任何内容，或是以任何方式复制或规避本网站或本网站所含内容的导航结构或呈现形式，从而通过本网站并未有意提供的任何手段获取或试图获取任何资料、文稿或信息。LIANHE.ART 保留禁止任何此类活动的权利。

<br />

你不得通过黑客攻击、破解密码或任何其他非法方式尝试在未经授权的情况下访问本网站的任何部分或功能，访问连接到本网站或任何 LIANHE.ART 服务器的任何其他系统或网络，或者访问 本网站上或通过本网站提供的任何服务。

<br />

你不得探测、扫描或测试本网站或与本网站连接的任何网络是否存在漏洞，也不得破坏本网站或与本网站连接的任何网络所采用的安全或身份验证措施。你不得反向搜索、跟踪或试图跟踪有关本网站的任何其他用户或访客、或者 LIANHE.ART 的任何其他顾客的任何信息 (包括不属于你的 LIANHE.ART 帐户)；不得滥用本网站或由本网站提供或通过本网站提供的任何服务或信息；也不得以任何形式泄露任何信息 (包括但不限于个人身份或信息，但不包括本网站提供的你的个人信息)。

<br />

你同意不采取任何会对本网站的基础架构或 LIANHE.ART 系统或网络、或者连接到本网站或 LIANHE.ART 的任何系统或网络带来不合理或不成比例的高负载的行为。

<br />

你同意不使用任何设备、软件或程序干扰或尝试干扰本网站或其上执行的任何事务的正常工作，也不干扰任何其他人使用本网站。

<br />

你不得伪造标头或以其他方式人为操控标识符，以伪装你在本网站或其提供的任何服务上或者通过本网站和此类服务发送给 LIANHE.ART 的任何信息或传输的来源。你不得假装自己是其他人或代表其他人，也不得冒充任何其他个人或实体。

<br />

你不得出于任何非法或本使用条款所禁止的目的使用本网站或其包含的任何内容，也不得唆使任何非法活动或其他侵犯 LIANHE.ART 或他人权利的活动。

<br />

**你知晓并同意 LIANHE.ART 委托第三方提供服务过程中存在的电子合同签约及证据保全等服务，你在服务过程中签署的电子合同视为本条款的一部分。**

<h2 className="text-4xl my-6">购买；其他条款和条件</h2>

购买商品或服务以及使用本网站的特定部分或功能 (包括促销或其他类似功能) 时，还需受其他条款和条件约束。所有此类条款均通过此处援引构成本使用条款的一部分。你同意遵守此类其他条款和条件，包括在适当的情况下表明你已达到使用或参与此类服务或功能所需的法定年龄，若未达到的，则必须让父母或法定监护人（其必须具有法律能力）查看使用条款并代表你完成注册，且使用条款将适用于你。如果本使用条款与针对本网站特定部分公布的条款或适用于该部分的条款 (或者针对本网站上或通过本网站提供的任何服务的条款) 之间存在冲突，则后者应约束你对本网站该部分或特定服务的使用。

<br />

LIANHE.ART 对其产品和服务的义务 (如有) 仅受提供这些产品和服务时依据的协议约束，本网站中包含的任何条款均不得解释为可修改此类协议。

<br />

LIANHE.ART 可能会不经通知随时更改本网站上提供的任何产品或服务，或更改任何此类产品或服务的适用价格。本网站上关于产品和服务的资料可能已过期，LIANHE.ART 不承诺对本网站上关于此类产品和服务的资料进行更新。

<br />

以下条款也约束并适用于本网站的使用，并且通过此处援引纳入本条款：

<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li>LIANHE.ART 商标和版权材料使用准则</li>
    <li>LIANHE.ART 企业入驻合作框架协议</li>
    <li>LIANHE.ART 个人入驻合作框架协议</li>
    <li>版权侵权损害赔偿请求</li>
  </ul>
</div>
<br />

以上每项政策都可能随时更改，并自本网站上发布此类更改后立即生效。

<h2 className="text-4xl my-6">帐户、密码和安全</h2>

本网站上或通过本网站提供的某些功能或服务可能需要你开设一个帐户 (包括设置 LIANHE.ART 账号和密码)。对于维护你所持有的帐户信息 (包括密码) 的保密性，以及由于你未能确保此类信息安全和保密而在你的帐户中发生的任何及所有活动，你将承担全部责任。你同意在他人未经授权而使用你的帐户或密码时，或出现其他任何安全受到侵害的情形时立即通知 LIANHE.ART。如果由于你未能确保帐户信息的安全和保密，得以让他人使用你的 LIANHE.ART 账号、密码或帐户，则你可能需为 LIANHE.ART 以及本网站的任何其他用户或访客由此而遭受的损失承担责任。

<br />

在任何时候，你都不得在未经 LIANHE.ART 账号、密码和帐户持有人事先许可和同意的情况下使用任何其他人的 LIANHE.ART 账号、密码或帐户。对于因你未履行相关义务而导致的任何损失或损害，LIANHE.ART 不能也不会承担任何责任。

<h2 className="text-4xl my-6">隐私</h2>

LIANHE.ART 的隐私政策适用于本网站的使用，并且其条款通过此处援引构成本使用条款的一部分。若要阅读 LIANHE.ART 的隐私政策，请 <a rel="noreferrer noopener" target="_blank" href="https://lianhe.art/privacy" class="primaryColor">点击此处</a>。另外，使用本网站，即表示你确认并同意互联网传输无法做到完全私密或安全。即使页面上显示了特殊通知，告知你特定数据传输 (例如信用卡信息) 已加密，你发送给本网站的任何消息或信息仍有可能被他人读取或截取，对此你已知悉。

<h2 className="text-4xl my-6">指向其他网站和 LIANHE.ART 网站的链接</h2>

本网站可能包含指向其他独立第三方网站 (“链接网站”) 的链接。这些链接网站只为方便访客而提供。此类链接网站不受 LIANHE.ART 控制。LIANHE.ART 对此类链接网站的内容 (包括此类链接网站上包含的任何信息或资料) 概不负责也不认可。在与这些链接网站交互时，你需要自己独立判断。

<h2 className="text-4xl my-6">免责声明</h2>

LIANHE.ART 不承诺本网站或其任何内容、服务或功能无任何错误或不会中断，不承诺任何缺陷将得到更正，或者你对本网站的使用会产生特定结果。本网站及其内容按“原样”及“可用情况”提供。本网站上提供的所有信息若有更改，恕不另行通知。LIANHE.ART 无法保证你从本网站下载的所有文件或其他数据无病毒、未受感染或不具破坏性。LIANHE.ART 不提供任何明示或暗示的保证，包括对准确性、非侵权性、适销性及对特殊用途适用性的担保。对于任何与你对本网站和/或任何 LIANHE.ART 服务的使用有关的任何第三方的作为、不作为和行为， LIANHE.ART 概不承担责任。使用本网站及任何链接网站的全部责任由你自己承担。如果你对本网站或其包含的任何内容不满意，则你可针对 LIANHE.ART 采取的唯一补救措施就是停止使用本网站或任何此类内容。这一补救措施限制是双方之间的协议的一部分。

<br />

上述免责声明适用于因任何性能故障、错误、遗漏、中断、删除、缺陷、操作或传输延迟、电脑病毒、通信线路故障、失窃、毁坏、未经授权的访问、篡改或使用 (无论是出于违约、侵权、疏忽或任何其他诉因) 而导致的任何损害、责任或伤害。

<br />

LIANHE.ART 保留在不发布通知的情况下随时采取以下任何行动的权利：(1) 因任何原因修改、暂停或终止本网站或本网站的任何组成部分的运行或对其的访问；(2) 修改或更改本网站或本网站的任何组成部分及任何适用政策或条款；(3) 在执行常规或非常规维护、错误纠正或其他更改所必需时，中断本网站或本网站的任何组成部分的运行。

<h2 className="text-4xl my-6">责任限制</h2>

除法律禁止的情形外，LIANHE.ART 概不因任何间接、衍生、惩戒、附带或惩罚性损害 (包括利益损失) 而向你承担责任，即使 LIANHE.ART 已被告知可能发生此类损害时也是如此。
即使本使用条款中有其他条款规定，对于以任何方式使用本网站或其任何内容所引发或与之有关的任何损害或损失，LIANHE.ART 应负责任；在任何情况下，LIANHE.ART 的责任也不应超过以下两个金额的较大值：(1) 在对 LIANHE.ART 首次索赔之日前六个月内支付的任何与本网站或其上的任何服务或功能相关的任何订阅费用或类似费用的总额，或 (2) 500.00 人民币。有些司法辖区不允许限制责任，因此上述限制可能对你不适用。

<h2 className="text-4xl my-6">赔偿</h2>

**如果由于你使用本网站而引起或与之相关的原因，导致任何第三方对 LIANHE.ART 提出任何要求、损失、责任、索赔或费用 (包括律师费) 主张，你同意赔偿 LIANHE.ART 及其高级职员、董事、股东、前任或继任利益相关者、员工、代理机构、子公司和关联公司，并使其免受损害。**

<h2 className="text-4xl my-6">违反本使用条款</h2>

如果 LIANHE.ART 认为与你对本网站的使用相关的任何调查或起诉需要披露信息，或者为了确定可能对 LIANHE.ART 的权利或财产或者本网站的访客或用户的权利或财产造成 (有意或无意的) 损害或干扰的人员的身份、联系此人或对其采取法律行动而需要披露信息，则 LIANHE.ART 可能会披露所掌握的关于你的任何信息 (包括身份信息)。LIANHE.ART 始终保留相关的信息披露权利，以便为了遵守任何适用的法律、法规、法律程序或政府要求而披露必需的信息。当 LIANHE.ART 认为适用的法律要求或允许此类披露时，LIANHE.ART 也可能会披露你的信息，包括出于欺诈保护目的与其他公司和组织交换信息。

<br />

你确认并同意，LIANHE.ART 有权保留你通过本网站、本网站上提供的任何服务或通过本网站提供的任何服务与 LIANHE.ART 之间进行的任何传输或通信，并可在以下情况下披露这些数据：应法律要求必须这样做，或者 LIANHE.ART 有足够的理由相信，只有这样做才能合理地 (1) 遵守法律程序；(2) 执行本使用条款；(3) 对此类数据侵犯他人权利的主张作出回应；或者 (4) 保护 LIANHE.ART、其员工、本网站的用户或访客以及公众的权利、财产或个人安全。

<br />

你同意， **如果 LIANHE.ART 认为你违反了本使用条款或其他可能与你对本网站的使用相关的协议或准则，则可在不事先通知的情况下自行决定终止你对本网站的访问权限，并/或阻止你在未来访问本网站。** 你还同意，你的任何违反本使用条款的行为将会构成非法及不正当商业行为，将会对 LIANHE.ART 造成仅靠金钱赔偿难以弥补的损害，在这种情形下，LIANHE.ART 可以申请采取其认为必要或适当的禁令或等效的补救措施。这些补救措施是 LIANHE.ART 根据现行普通法或衡平法享有的任何其他补救措施的补充。

<br />

你同意，LIANHE.ART 可以出于以下原因在不事先通知的情况下自行终止你对本网站的访问权限，这些原因包括 (但不限于)：(1) 执法机构或其他政府机构要求这样做，(2) 你要求这样做 (自发的帐户删除)，(3) 本网站、本网站上提供的任何服务、通过本网站提供的任何服务中止或出现重大修改，或 (4) 出现意外技术问题。

<br />

如果 LIANHE.ART 因你违反本使用条款而对你采取任何法律行动，则在 LIANHE.ART 享有的任何其他救济之外，LIANHE.ART 还将有权向你追讨相关款项，并且你同意支付全部合理的律师费和诉讼费用。 **你同意，对于因违反本使用条款而导致你对本网站的访问权限被终止的情况，LIANHE.ART 对你或任何第三方均不承担任何责任。**

<h2 className="text-4xl my-6">管辖法律；争议解决</h2>

你同意，与你访问或使用本网站相关的所有事项 (包括所有纠纷) 均受中华人民共和国法律管辖。**你同意，中华人民共和国北京市通州区的法院拥有管辖权，并且你放弃对此类管辖权或地点的任何异议。** 根据本使用条款提出的任何索赔都应该在诉讼理由产生后的一 (1) 年内提出，否则此类索赔或诉讼理由将被视为无效。根据购买商品和服务的独立条款和条件提出的索赔不受此限制。不应追讨或收取除实付费用之外的任何补偿费用，除非获胜方有权要求弥补其律师费等相关费用。如果 LIANHE.ART 和你之间因你对本网站的使用而引发纠纷或争议，双方应立即尝试本着善意的原则解决此类争议。如果 LIANHE.ART 在合理的时间 (不超过三十 (30) 天) 内无法解决此类争议，则任何一方可向人民法院提起诉讼。如果无法通过人民法院解决争议，则双方可以自由寻求适用的法律赋予他们的任何权利或补救措施。

<h2 className="text-4xl my-6">在法律禁止的地区无效</h2>

**LIANHE.ART 在其所在地中华人民共和国管理和运营 lianhe.art 网站；** 其他 LIANHE.ART 网站可能由中国境外的各个分支机构管理和运营。虽然本网站可以在全世界范围内访问，但是并非通过本网站或在本网站上谈及、援引或提供的所有功能、产品或服务均适用于所有人或所有地理位置，也不一定适合或可供中国境外的国家/地区使用。LIANHE.ART 有权自行决定向任何个人或地理区域提供哪些功能、产品或服务以及具体的提供数量。如果本网站上的任何功能、产品或服务在特定地区被禁，则提供相应功能、产品或服务的约定无效。如果你从中国境外访问本网站，即视作你主动行事，因此需要自行负责遵守当地的适用法律。

<h2 className="text-4xl my-6">其他</h2>

你不得在违反适用法律法规 (包括但不限于中国出口法律法规) 的情况下，使用、出口或再出口任何内容、其副本、其改编内容或本网站所提供的任何产品或服务。

<br />

如果本使用条款的任何条款由法院或其他具有司法管辖权的法庭裁定为无效或无法执行，则相关条款应在最低必要范围内予以限制或排除，并用最能体现本使用条款意愿的有效条款予以替换，从而确保本使用条款仍具有完全的效力和作用。本使用条款构成你与 LIANHE.ART 就你对本网站的使用所达成的完整协议，你与 LIANHE.ART 之前存在的任何及所有其他关于此类使用的书面或口头协议或共识都将被取代和作废。除了你与 LIANHE.ART 签订的购买协议中的相关条款，LIANHE.ART 不接受针对本使用条款的任何反要约，并在此明确拒绝所有此类要约。即使 LIANHE.ART 未能坚持或强制要求严格履行本使用条款，也不应被视为 LIANHE.ART 对相应权利的放弃或对相应条款的豁免，LIANHE.ART 与你或任何其他方之间的任何行为也不应被视为对本使用条款的任何条款构成修改。本使用条款不得诠释或解释为授予任何第三方任何权利或为其提供任何补救措施。

<br />

LIANHE.ART 提供对 LIANHE.ART 国际数据的访问，因此其中可能包含对未在你所在国家/地区发布的 LIANHE.ART 产品、计划和服务的引用或交叉引用。此类引用并不表示 LIANHE.ART 计划在你所在的国家/地区发布此类产品、计划或服务。

<h2 className="text-4xl my-6">反馈和信息</h2>

你在本网站提供的任何反馈均被视为“非机密信息”。LIANHE.ART 可不受限制地随意使用此类信息。

<br />

本网站上包含的信息若有更改，恕不另行通知，你有责任定期查看本使用条款的更改。你在变更信息发布之后继续使用本网站，即表示你同意且接受该等更改。

<br />

版权所有 © 2017-2021 LIANHE.ART 保留所有权利。</div>`

const ToSPage: NextPage = () => (
  <Layout title="网站使用条款 - LIANHE.ART 联合音乐 数字版权管理发行合作平台">
    <div className="md:container md:mx-auto lg:pt-20 pt-0">
      <div className="min-h-full py-12 flex flex-col justify-center sm:py-8">
        <div className="relative px-8 py-4 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="relative py-4">
            <div className="flex justify-start lg:pt-0 pt-20">
              <h1 className="lg:text-7xl text-5xl lg:my-8 md:my-4 lg:pt-0 pt-20">网站使用条款</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ToSPage
