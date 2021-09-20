import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const content = `<div className="markdown-container py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">

**最后更新：2021 年 9 月 18 日**

<br />

LIANHE.ART 的隐私政策阐释了 LIANHE.ART 如何收集、使用和共享你的个人数据。请花些时间熟悉我们在隐私保护方面的做法，如有任何疑问，请联系我们。

<br />

当你使用我们的「服务」 (见下文) 时，本《隐私政策》适用。

<br />

我们使用「指定国家/地区」指代欧盟 (EU) 和欧洲经济区 (EEA) 的国家/地区 以及 中国香港、中国澳门、中国台湾。

<h2 className="text-4xl my-6">服务</h2>

当你使用我们的「服务」时，本《隐私政策》，包括 LIANHE.ART《Cookie 政策》适用。

<br />

本《隐私政策》适用于 lianhe.art、LIANHE.ART 品牌 APP、LIANHE.ART 相关网站、APP、通讯以及服务 (统称为「服务」)，包括站外「服务」，例如: 我们的广告服务，但是不包括声明在不同隐私政策下提供的服务。

<h2 className="text-4xl my-6">什么是 LIANHE.ART 的个人数据？</h2>

我们坚信并尊重基本隐私权，并认为这些基本权利不应因你生活的国家和地区而有所不同。 **这正是我们将任何与已识别或可识别的个人相关的数据或已与 LIANHE.ART 或可与之关联的数据视为“个人数据”(无论相关个人所居何处) 的原因。 这意味着可通过其直接识别你身份的数据 (如你的姓名) 即为个人数据。**

<br />

本隐私政策阐释了 [LIANHE.ART、联合互娱（北京）文化有限公司 或 LIANHE.ART 及 联合互娱（北京）文化有限公司的附属公司]() 如何处理你的个人数据，无论你是通过我们的网站、App 、小程序还是直接 (包括通过电话或工单支持系统) 与我们互动。LIANHE.ART 的隐私政策不用于解释第三方如何定义或使用个人数据。我们建议你与他们互动之前先阅读他们的隐私政策，了解你的隐私权。

<h2 className="text-4xl my-6">你在 LIANHE.ART 的隐私权</h2>

我们尊重你获知、访问、更正、传输、限制处理和删除你的个人数据的能力。我们向我们在全球的每一位客户提供这些权利，如果你选择行使这些隐私权，你有权不受到 LIANHE.ART 的区别对待，有权从 LIANHE.ART 获得与不行使隐私权时应获得的同等程度的服务质量。LIANHE.ART 不会出售你的数据。

<br />

在某些情况下，我们可能无法批准你的请求，例如，你要求删除你的数据但 LIANHE.ART 在法律上有义务保留该记录以遵守适用法律。如果你的请求会影响我们出于反欺诈和安全目的合法使用数据，我们也可能会拒绝你的请求，例如当你请求删除出于安全考虑而正在调查的账号时。另外，如果你的隐私请求危及他人隐私、意义不大、不合理或极其不切实际，我们也可能会拒绝。

<h2 className="text-4xl my-6">我们从你那里收集的个人数据</h2>

我们相信我们能够为你提供优秀的产品和良好的隐私。这意味着我们将努力 **只收集我们需要的个人数据。** LIANHE.ART 收集的个人数据取决于你与 LIANHE.ART 的互动方式。有关 LIANHE.ART 如何处理特定个人服务的个人数据的说明，请访问 。
当你创建 LIANHE.ART 账号、申请入驻平台、购买服务、下载软件更新、连接到我们的服务、联系我们 (包括通过社交媒体)、参与在线调查或以其他方式与 LIANHE.ART 互动时，我们可能会收集各种信息，包括：

<br />

<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>账号信息。</strong>你的 LIANHE.ART 账号和相关账号详细信息，包括电子邮件地址、注册的设备、账号状态和已使用时间</li>
    <li><strong>设备信息。</strong>可用于识别你的设备的数据 (如设备序列号) 或关于设备的数据 (如浏览器类型)</li>
    <li><strong>联系信息</strong>。姓名、电子邮件地址、实际地址、电话号码或其他联系信息等数据</li>
    <li><strong>支付信息。</strong>有关你的帐单地址和付款方式的数据，例如银行详细信息、信用卡、借记卡或其他支付卡信息</li>
    <li><strong>交易信息。</strong>有关 LIANHE.ART 产品和服务的购买或由 LIANHE.ART 促成的交易的数据，包括在 LIANHE.ART 平台上进行购买的相关信息</li>
    <li><strong>防欺诈信息。</strong>用于帮助识别和防止欺诈的数据，包括设备信用评分</li>
    <li><strong>使用数据。</strong>有关你在产品上的活动和产品使用的数据，例如服务内的 app 启动数据，包括浏览历史记录、搜索历史记录、产品交互、崩溃数据、性能和其他诊断数据以及其他使用数据</li>
    <li><strong>位置信息。</strong>根据你的网络获取的大致位置</li>
    <li><strong>政府 ID 数据。</strong>在某些司法辖区，出于合约签署或遵守法律规定的目的，我们可能会要求用户提供由政府发放的身份证明（如个人身份证照片、手持身份证照片、企业营业执照等必要的数据。）</li>
    <li><strong>你提供给我们的其他信息。</strong>例如你与 LIANHE.ART 的详细通信内容，包括与客户支持人员的互动内容以及通过社交媒体渠道进行联系的相关内容<br>
  &nbsp;</li>
  </ul>
</div>

你可以不提供我们请求你提供的个人数据。但如果你选择不提供，在许多情况下，我们将无法向你提供我们的产品或服务，或回应你可能提出的请求。

<br />

你提供的前述信息将在你使用本服务期间持续授权我们使用。在你主动注销账号时，我们将根据适用法律法规的要求尽快使其匿名或删除你的个人信息。

<h2 className="text-4xl my-6">我们从其他资源接收到的个人数据</h2>

我们可能会从**按照你的指示**行事的其他 个人 、企业或第三方、与我们合作提供我们的产品和服务并在安全和防欺诈方面为我们提供协助的 **合作伙伴** 以及其他合法来源接收到你的相关个人数据。

<br />

<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>个人。</strong> LIANHE.ART 可能会从其他个人那里收集关于你的数据，例如，如果这个人邀请你加入某个 LIANHE.ART 服务或组织或与你分享了内容。</li>
    <li><strong>按你的指示。</strong> 你可以指示其他个人或第三方与 LIANHE.ART 共享数据。例如，你可以指示你的移动运营商与 LIANHE.ART 共享运营商账号相关数据。</li>
    <li><strong>LIANHE.ART 合作伙伴。</strong> 出于安全和防欺诈的目的，我们可能还会通过第三方核实你提供的信息，比如在创建 LIANHE.ART 账号时。</li>
  </ul>
</div>

<br />

出于研究和开发目的，我们可能会使用数据集，例如包含以下内容的数据集：可能会与可识别的个人联系在一起的图片、语音或其他数据。在获取此类数据集时，我们会遵守适用法律，包括数据集托管所在司法辖区的法律。在使用此类数据集进行研究和开发时，我们不会试图重新识别可能出现在其中的个人的身份信息。

<h2 className="text-4xl my-6">我们对个人数据的使用</h2>

**LIANHE.ART 会出于以下目的使用个人数据：为服务提供支持、处理你的交易、与你沟通、实施安全和防欺诈措施以及遵守法律。我们也可能在经你同意的情况下将个人数据用于其他用途。**

<br />

**LIANHE.ART 仅在有合法的法律依据的情况下才使用你的个人数据。** 根据具体情况，LIANHE.ART 可能需要依赖于你的同意或执行处理的必要性来履行与你订立的合同、保护你或其他人的切身利益或履行法律义务。我们也可能在我们认为符合我们或他人的合法利益且同时考虑到你的利益、权利和期望的情况下处理你的个人数据。

<br />

<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>为我们的服务提供支持。</strong> LIANHE.ART 收集为我们的服务提供支持所必需的个人数据，收集的数据可能用于产品或服务的个性化或改进、用于审计或数据分析等内部目的或用于故障诊断等。</li>
    <li><strong>处理你的交易。</strong> 为了处理交易，LIANHE.ART 需要收集你的姓名、购买内容和付款信息等数据。</li>
    <li><strong>与你沟通。</strong> 为了回复你的讯息、就你的交易或账号与你联系、推销我们的产品和服务、提供其他相关信息或请求你提供信息或反馈。有时，我们可能会使用个人数据发送重要通知，例如关于购买的信息以及条款、条件和政策的变更。 由于这些信息对你与 LIANHE.ART 之间的沟通至关重要，你不能拒绝接收这些重要通知。</li>
    <li><strong>安全和防欺诈。</strong> 旨在保护个人、员工和 LIANHE.ART，防止损失，防止欺诈，包括出于保护所有用户利益的目的为个人、员工和 LIANHE.ART 提供保护，预先筛选或扫描上传内容中的潜在非法内容，包括儿童性虐待内容。</li>
    <li><strong>遵守法律。</strong> 旨在遵守适用法律 - 例如履行税务或申报义务，或遵守合法的政府要求。</li>
  </ul>
</div>

<br />

LIANHE.ART 不会在不提供人工审查机会的情况下使用算法或剖析研究方法制定任何会对你产生重大影响的决策。

<br />

**LIANHE.ART 保留个人数据的时间仅限于满足收集目的所需的时间，并遵循本隐私政策或我们的特定服务隐私声明中的相关规定或适用法律的相关要求。** 我们将在实现本隐私政策中以及特定服务隐私摘要中所述目的所必需的期间内保留你的个人数据。在评估保留期时，我们会先仔细查明是否有必要保留所收集的个人数据，如果需要保留，会努力以法律允许的最短时间来保留个人数据。

<br />

**请你充分知晓，在以下情形中，LIANHE.ART共享、转让、公开披露你的个人信息无需事先征得你的授权同意：**

<br />
<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>与国家安全、国防安全有关的；</strong></li>
    <li><strong>与公共安全、公共卫生、重大公共利益有关的；</strong></li>
    <li><strong>与犯罪侦查、起诉、审判和判决执行等有关的；</strong></li>
    <li><strong>出于维护你或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</strong></li>
    <li><strong>你自行向社会公众公开的个人信息；</strong></li>
    <li><strong>从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</strong></li>
  </ul>
</div>
<br />

根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向你通知并征得你的同意。

<h2 className="text-4xl my-6">我们对个人数据的共享</h2>

LIANHE.ART 可能会与代表我们的 **服务提供商** 、我们的 合作伙伴 或 按照你的指示 行事的其他方共享你的个人数据。此外，LIANHE.ART 不会为了第三方的营销目的与第三方共享个人数据。

<br />
<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>服务提供商。</strong> LIANHE.ART 可能会与第三方合作，这些第三方会作为我们的服务提供商代表我们执行某些任务，例如向客户交付产品。LIANHE.ART 服务提供商有义务按照本隐私政策的规定和我们的指示处理个人数据。他们不能将我们共享的个人数据用于其自己的目的，一旦完成了我们的要求，他们必须删除或返还这些数据。</li>
    <li><strong>合作伙伴。</strong> LIANHE.ART 有时可能会与第三方合作提供服务或其他产品。例如，数据监控等产品由 LIANHE.ART 与合作伙伴联合提供。LIANHE.ART 要求合作伙伴保护你的个人数据。</li>
    <li><strong>司法机构。</strong> LIANHE.ART 可能会根据法律法规规定、诉讼、争议解决需要，或按行政、司法机关依法提出的要求，对外共享你的个人信息。</li>
    <li><strong>其他。</strong> LIANHE.ART 可能会按照你的指示或在你同意的情况下与其他人共享你的个人数据，例如当我们与你的运营商共享信息以激活你的账号时。如果我们确定就国家安全、执法或具有公众重要性的其他事宜而言，披露是必须的或适当的，我们也可能会披露关于你的信息。在有合法依据的情况下，如果我们确定披露对于执行我们的条款和条件或保护我们的运营或用户是合理必要的，或者在重组、合并或出售活动中是合理必要的，我们也可能会披露关于你的信息。</li>
  </ul>
</div>
<br />

<h2 className="text-4xl my-6">我们对个人数据的储存与保护</h2>

我们仅在本政策所述目的所必需期间和法律法规及监管规定的时限内保存你的个人信息。

<br />

我们相信良好的隐私根植于高度的安全性。我们使用 **管理性、技术性和物理性保护措施** 来保护你的个人数据，同时将个人数据的性质、数据的处理以及面临的威胁纳入考虑。我们一直在持续改进这些保护措施，以确保你的个人数据始终安全。有关详细信息，请访问我们的 LIANHE.ART 平台安全指南。

<br />

互联网环境并非百分之百安全，我们将尽力确保或担保你发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，造成你的合法权益受损，我们将承担相应的法律责任。

<br />

在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向你告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、你可自主防范和降低风险的建议、对你的补救措施等。我们将及时将事件相关情况以应用程序推送、电子邮件、短信、电话等方式告知你，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。

<h2 className="text-4xl my-6">Cookie 和其他技术</h2>

LIANHE.ART 的网站、在线服务、互动应用程序、电子邮件和广告可能会使用“cookie”和其他技术，如像素标签和网站信标。**此等技术帮助我们更好地了解用户的行为 (包括出于安全和防欺诈的目的)，告诉我们人们浏览了我们网站的哪些部分，衡量广告和网络搜索的效果并加以改善。**

<br />
<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li><strong>通信 Cookie。</strong> 这些 Cookie 用于促成进出 LIANHE.ART 系统的网络流量，包括通过帮助检测错误而生成的流量。</li>
    <li><strong>绝对必要的 Cookie。</strong> 为了提供你访问或请求的特定功能或服务，必须设置这些 cookie。例如，我们需要使用它们才能以适当的格式和语言显示网站、对你的交易进行认证和验证并在你在 lianhe.art 上进行网上购物时保留你购物袋中的内容。</li>
    <li><strong>其他 Cookie。</strong> 我们使用这些 cookie 来了解访问者如何与我们的网站和在线服务进行交互，包括帮助我们评估广告和网络搜索的有效性。LIANHE.ART 还使用这些 cookie 来记忆你在浏览时所作的选择，以便为你提供定制的体验。</li>
  </ul>
</div>
<br />

LIANHE.ART不会将Cookies用于本政策所述目的之外的任何用途。如果你不希望 LIANHE.ART 使用 cookie，可在浏览器的隐私设置中选择“阻止所有 cookie”。关于各浏览器如何操作，请咨询你的提供商，了解如何禁用 cookie。如果禁用所有 cookie，LIANHE.ART 网站的某些功能可能会变为不可用。

<br />

除了 cookie，LIANHE.ART 还使用其他技术帮助我们实现类似目的。

<br />

在 LIANHE.ART 发送给你的一些电子邮件中，我们会提供一个与 LIANHE.ART 网站上的内容链接的“点按到达 URL”。当你点按其中的一个 URL 时，在到达我们网站上的目标页面之前，将通过一个单独的服务器。我们会跟踪这一点按到达过程，以帮助确定用户对特定主题的兴趣，并衡量我们是否有效与你沟通。如果你不喜欢这种跟踪方式，请勿点按电子邮件中的图片或文本链接。

<br />

像素标签使我们可以用你可阅读的格式发送电子邮件，并告知我们邮件是否被打开。我们可利用这些数据来减少或免除向客户发送的电子邮件。

<br />

**LIANHE.ART 通常将使用这些 cookie 和类似技术收集的数据视为非个人数据。** 但是，如果当地法律将 Internet 协议 (IP) 地址或类似识别标记视为个人数据，我们也会将此类识别标记视为个人数据。此外，LIANHE.ART 有时会将通过这些技术收集的非个人数据与 LIANHE.ART 持有的其他个人数据合并。当我们以这种方式合并数据后，出于本隐私政策的目的，我们会将合并后的数据视为个人数据。

<h2 className="text-4xl my-6">国家/地区间的个人数据传输</h2>

LIANHE.ART 产品和服务将你与世界连接。为了实现这一目标，**你的个人数据可能会被传输到世界各地的实体或被其访问。** LIANHE.ART 遵守在国家/地区间传输个人数据的相关适用法律，以确保你的数据在任何地方都受到保护。
**控制你个人数据的 LIANHE.ART 实体可能会因你居住的地方而有所不同。**

<br />
<div class="ml-8">
  <ul class="list-disc md:list-inside">
    <li>如果你居住在「指定国家/地区」之内: 聯合音樂有限公司（Union Music Limited.） 将成为控制方，控制提供给我们的服务、由服务收集或为服务之目的收集、或因服务而处理的个人数据。</li>
    <li>如果你居住在「指定国家/地区」之外: 联合互娱（北京）文化有限公司 将成为控制方，控制提供给我们的服务、由服务收集或为服务之目的收集、或因服务而处理的个人数据。</li>
  </ul>
</div>
<br />

例如，中国内地的 LIANHE.ART 服务由联合互娱（北京）文化有限公司控制。如果你不居住在中国内地，你的个人数据可能由 聯合音樂有限公司（Union Music Limited.） 代表你所在司法辖区内控制个人数据的 LIANHE.ART 实体进行处理。

<h2 className="text-4xl my-6">全公司对你隐私的承诺</h2>
为确保你个人数据的安全，我们向全体 LIANHE.ART 员工传达了公司的隐私和安全准则，并在公司内部严格执行隐私保护措施。

<h2 className="text-4xl my-6">政策的更新</h2>

随着法律法规的更新，以及 LIANHE.ART 的业务发展，我们可能适时更新本政策。但未经你明确同意，我们不会削减你依据本政策所享有的权利。我们会在网站、移动端等发布修订后的版本，并以适当的方式提醒你相关内容的变更。如该等更新造成你在本政策下权利的实质减少或重大变化，我们将通过设置弹窗提醒等方式再次取得你的同意。

<br />

在本政策更新后，如你继续使用我们的网站、应用或服务，即表示你同意接受更新后的本政策约束。如无特殊说明，本政策以及本政策的更新版本自发布之日起生效。

<h2 className="text-4xl my-6">隐私问题</h2>

**如果你对 LIANHE.ART 的隐私政策或隐私处理方法有任何疑问，请联系我们的数据保护官，或如果你想提出投诉，可以通过以下方式联系我们：访问 [lianhe.art/contact](https://lianhe.art/contact) 或通过工单支持系统发送工单。** 你也可以咨询我们如何提交隐私投诉，我们将尽可能为你提供帮助。

<br />

LIANHE.ART 非常重视你的隐私问题。我们设立了专门团队来查看你的咨询信息 (包括那些在回应访问或下载请求时收到的咨询信息)，以确定如何针对你的问题或疑虑提供最好的回应。在大多数情况下，实质性咨询会在 7 天内得到答复。在其他情况下，我们可能需要更多信息或让你知晓我们需要更多时间来回应。

<br />

如果你的投诉表明我们在处理隐私问题方面可以改进，我们将在下一个合理的机会采取措施进行相关更新。如果隐私问题对你或其他人造成负面影响，我们将采取措施与你或其他人一起解决。

<br />

如果你对 LIANHE.ART 的回应不满意，可以将投诉提交给相应的监管机构。如果你咨询我们，我们会根据你的实际情况，提供可能适用的相关投诉途径的信息。

<br />

当本隐私政策发生实质性更改时，我们将至少提前一周在本网站上发布通知，如果我们有你的存档数据，我们还会直接与你联系。</div>`

const PrivacyPage: NextPage = () => (
  <Layout title="LIANHE.ART 隐私政策">
    <div className="md:container md:mx-auto lg:pt-20 pt-0">
      <div className="min-h-full py-12 flex flex-col justify-center sm:py-8">
        <div className="relative px-8 py-4 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="relative py-4">
            <div className="flex justify-start lg:pt-0 pt-20">
              <h1 className="lg:text-7xl text-5xl lg:my-8 md:my-4 lg:pt-0 pt-20">隐私政策</h1>
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

export default PrivacyPage