import type { LegalDocument, LegalDocumentId } from "../legal";
import type { Locale } from "../../types/theme";

export const legalGroupC: Partial<
  Record<Locale, Record<LegalDocumentId, LegalDocument>>
> = {
  vi: {
    terms: {
      title: "Điều khoản dịch vụ",
      summary:
        "Đây là bản dự thảo làm việc cho một dịch vụ TalkChat có thể được cung cấp trong tương lai. Đây chưa phải là thỏa thuận pháp lý có thể sử dụng ngay.",
      draftNotice:
        "BẢN DỰ THẢO — CẦN ĐƯỢC RÀ SOÁT PHÁP LÝ: trước khi công khai dịch vụ, cần bổ sung danh tính và thông tin liên hệ của đơn vị vận hành, luật áp dụng, các điều khoản về trách nhiệm và các điều kiện cuối cùng, sau đó nhờ chuyên gia đủ năng lực rà soát.",
      reviewedAt: "Bản dự thảo — chưa có ngày có hiệu lực.",
      sections: [
        {
          heading: "1. Tình trạng hiện tại của dự án",
          paragraphs: [
            "TalkChat sử dụng Supabase Auth cho tài khoản, đăng nhập và khôi phục mật khẩu. Các chức năng nhắn tin, lưu trữ cuộc trò chuyện và kiểm duyệt chưa được triển khai.",
            "Bản dự thảo này liệt kê các vấn đề cần giải quyết nếu dịch vụ được ra mắt. Nội dung này không có nghĩa là hiện đã có dịch vụ, kênh hỗ trợ hoặc quy trình kiểm duyệt.",
          ],
        },
        {
          heading: "2. Quyền truy cập và độ tuổi tối thiểu dự kiến",
          paragraphs: [
            "Giao diện yêu cầu ngày sinh và kiểm tra cục bộ độ tuổi tối thiểu là 13 trước khi đăng ký. Đây không phải là xác minh danh tính và không có quy tắc về độ tuổi nào được thực thi ở phía máy chủ.",
            "Độ tuổi tối thiểu, phương thức xác minh và các quy tắc dành cho người chưa thành niên phải được xem xét cho từng quốc gia nơi dịch vụ có thể được cung cấp trước khi ra mắt.",
          ],
        },
        {
          heading: "3. Hành vi được kỳ vọng nếu dịch vụ được cung cấp",
          paragraphs: [
            "Người dùng dịch vụ trong tương lai cần tuân thủ luật hiện hành và quy tắc cộng đồng. Hành vi lạm dụng, nỗ lực truy cập trái phép, mạo danh và nội dung xâm phạm quyền của người khác cần được xử lý theo các quy tắc đã công bố và quy trình khiếu nại được xác định rõ.",
            "Hiện không có biện pháp xử lý, hoạt động kiểm duyệt hay quy trình khiếu nại thực tế nào.",
          ],
        },
        {
          heading: "4. Nội dung và quyền",
          paragraphs: [
            "Quyền đối với nội dung, các quyền sử dụng giới hạn cần thiết để vận hành dịch vụ trong tương lai, cũng như quy tắc về nội dung bất hợp pháp hoặc bị báo cáo phải được nêu rõ trong bản cuối cùng. Bản dự thảo này không cấp cũng không tuyên bố có giấy phép đối với nội dung của người dùng.",
          ],
        },
        {
          heading: "5. Tính khả dụng, trách nhiệm và chấm dứt dịch vụ",
          paragraphs: [
            "Phiên bản này không cam kết về tính khả dụng, thời gian lưu giữ tin nhắn hay tính liên tục của dịch vụ. Các tuyên bố miễn trừ, giới hạn trách nhiệm, quy tắc chấm dứt, xuất dữ liệu và xóa dữ liệu phải được soạn thảo và rà soát theo luật áp dụng trước khi ra mắt.",
          ],
        },
        {
          heading: "6. Đơn vị vận hành, luật áp dụng và liên hệ",
          paragraphs: [
            "Danh tính pháp lý, địa chỉ, thông tin liên hệ của đơn vị vận hành, luật áp dụng và tòa án có thẩm quyền chưa được cung cấp. Không được tự ý bịa đặt các thông tin này; cần bổ sung trước khi công bố.",
          ],
        },
      ],
      relatedTitle: "Thông tin liên quan",
      related: [
        { label: "Chính sách quyền riêng tư", to: "/legal/privacy" },
        { label: "Quy tắc cộng đồng", to: "/legal/community" },
        { label: "Nguyên tắc bảo mật", to: "/legal/security" },
      ],
      backHome: "Quay về trang chủ",
    },
    privacy: {
      title: "Chính sách quyền riêng tư",
      summary:
        "Trang này mô tả hoạt động xử lý dữ liệu hiện tại của TalkChat và những thông tin cần được xác định trước khi ra mắt công khai.",
      draftNotice:
        "BẢN DỰ THẢO — CẦN ĐƯỢC RÀ SOÁT PHÁP LÝ: đây không phải tư vấn pháp lý hay bảo đảm tuân thủ. Mục đích, căn cứ pháp lý, bên kiểm soát, bên nhận dữ liệu, thời hạn lưu giữ và quyền của người dùng phải được xác định và rà soát theo các khu vực pháp lý liên quan trước khi ra mắt.",
      reviewedAt: "Bản dự thảo — chưa có ngày có hiệu lực.",
      sections: [
        {
          heading: "1. Dữ liệu được phiên bản hiện tại sử dụng",
          paragraphs: [
            "Khi đăng ký và đăng nhập, địa chỉ email và mật khẩu được gửi trực tiếp đến dự án Supabase đã cấu hình để sử dụng Supabase Auth. Tên hiển thị được gửi dưới dạng siêu dữ liệu tài khoản. Ngày sinh và việc chấp nhận điều khoản chỉ được sử dụng trong trình duyệt và không được gửi đi.",
            "SDK Supabase quản lý việc duy trì phiên trong trình duyệt. Các giá trị khác trong biểu mẫu chỉ tạm thời nằm trong bộ nhớ của trang; trình duyệt của bạn có thể độc lập đề nghị ghi nhớ các trường bằng tính năng tự động điền.",
            "Tùy chọn giao diện và ngôn ngữ được lưu riêng trong bộ nhớ cục bộ của trình duyệt. Nếu không thể sử dụng bộ nhớ này, các tùy chọn chỉ được giữ trong lần truy cập hiện tại.",
          ],
        },
        {
          heading: "2. Dịch vụ bên ngoài và nhật ký",
          paragraphs: [
            "Supabase xử lý dữ liệu cần thiết cho việc xác thực. Việc gửi email phụ thuộc vào cấu hình dự án và nhà cung cấp SMTP; cấu hình này chưa được xác minh. Hiện chưa triển khai dịch vụ phân tích hay chức năng nhắn tin TalkChat. Nhà cung cấp dịch vụ lưu trữ và hạ tầng mạng cũng có thể xử lý dữ liệu kết nối hoặc lưu nhật ký.",
          ],
        },
        {
          heading: "3. Dữ liệu có thể có trong dịch vụ tương lai",
          paragraphs: [
            "Dữ liệu mà dịch vụ tương lai thực sự thu thập chưa được xác định. Dữ liệu có thể bao gồm thông tin tài khoản và nội dung hoặc siêu dữ liệu cần thiết để vận hành dịch vụ, nhưng hiện chưa quyết định danh sách đầy đủ, mục đích hay căn cứ pháp lý nào.",
            "Người nhận, bên xử lý dữ liệu, khả năng chuyển dữ liệu ra ngoài khu vực đã chọn, thời hạn lưu giữ, quy tắc sao lưu và quy trình xóa vẫn chưa được xác định. Hiện không cam kết xóa tự động hoặc một thời hạn lưu giữ cụ thể nào.",
          ],
        },
        {
          heading: "4. Quyền và yêu cầu",
          paragraphs: [
            "Các quyền của cá nhân, cách thực hiện quyền, thời hạn phản hồi và cơ quan có thẩm quyền liên quan phụ thuộc một phần vào nơi cư trú của cá nhân, đơn vị vận hành dịch vụ và luật áp dụng. Những chi tiết này, bên kiểm soát dữ liệu và phương thức liên hệ hợp lệ phải được bổ sung trước khi ra mắt.",
            "Bản minh họa này không có kênh tiếp nhận yêu cầu truy cập, chỉnh sửa, xóa dữ liệu hoặc khiếu nại.",
          ],
        },
        {
          heading: "5. Quyền riêng tư và mã hóa",
          paragraphs: [
            "Việc có trang này không có nghĩa là các cuộc trò chuyện được mã hóa đầu cuối. Phiên bản này không có hệ thống nhắn tin hay mã hóa E2EE. Mọi hình thức mã hóa trong tương lai và các giới hạn của nó phải được mô tả sau khi thiết kế kỹ thuật và rà soát.",
          ],
        },
      ],
      relatedTitle: "Trang liên quan",
      related: [
        { label: "Điều khoản dịch vụ", to: "/legal/terms" },
        { label: "Nguyên tắc bảo mật", to: "/legal/security" },
        { label: "Cách báo cáo nội dung", to: "/legal/report" },
      ],
      backHome: "Quay về trang chủ",
    },
    community: {
      title: "Quy tắc cộng đồng",
      summary:
        "Các nguyên tắc được đề xuất cho những cuộc trò chuyện nếu TalkChat trở thành dịch vụ nhắn tin.",
      draftNotice:
        "BẢN DỰ THẢO — TalkChat hiện không cung cấp chức năng nhắn tin hoặc kiểm duyệt. Các quy tắc này không được thực thi bằng một hệ thống đang vận hành.",
      reviewedAt: "Nguyên tắc đề xuất — chưa có ngày có hiệu lực.",
      sections: [
        {
          heading: "Tôn trọng và an toàn",
          paragraphs: [
            "Hãy đối xử với người khác bằng sự tôn trọng. Đe dọa, quấy rối có chủ đích, thù ghét, hăm dọa và cổ súy bạo lực không có chỗ trong một cộng đồng an toàn.",
            "Không chia sẻ thông tin riêng tư của người khác khi chưa được phép. Không mạo danh người khác hoặc cố truy cập tài khoản hay thiết bị khi chưa được ủy quyền.",
          ],
        },
        {
          heading: "Nội dung và chào mời",
          paragraphs: [
            "Không gửi nội dung bất hợp pháp, nội dung lừa đảo, phần mềm độc hại, thư rác hoặc lời chào mời không mong muốn lặp đi lặp lại. Tôn trọng bản quyền và các quyền khác theo luật áp dụng.",
            "Các nguyên tắc này là đề xuất biên tập. Định nghĩa về nội dung bị cấm, trường hợp ngoại lệ, biện pháp có thể áp dụng và quy trình khiếu nại phải được xác định trước khi ra mắt.",
          ],
        },
        {
          heading: "Người chưa thành niên và báo cáo",
          paragraphs: [
            "Không nhắm mục tiêu không phù hợp vào người chưa thành niên hoặc chia sẻ hình ảnh, thông tin có thể khiến họ gặp nguy hiểm. Quy tắc bảo vệ, xử lý báo cáo và chuyển cấp cần được thiết kế với các biện pháp bảo vệ thích hợp trước khi ra mắt công khai.",
            "Bản minh họa không có chức năng báo cáo hay kiểm duyệt. Xem trang riêng để biết giới hạn này.",
          ],
        },
        {
          heading: "Thực thi",
          paragraphs: [
            "Phiên bản này không có đội ngũ kiểm duyệt, cơ chế chặn, quy trình xử lý vi phạm hoặc khiếu nại. Đừng dựa vào các quy tắc này như một biện pháp can thiệp thực tế.",
          ],
        },
      ],
      relatedTitle: "Trang liên quan",
      related: [
        { label: "Cách báo cáo nội dung", to: "/legal/report" },
        { label: "Nguyên tắc bảo mật", to: "/legal/security" },
        { label: "Chính sách quyền riêng tư", to: "/legal/privacy" },
      ],
      backHome: "Quay về trang chủ",
    },
    report: {
      title: "Báo cáo nội dung hoặc tài khoản",
      summary:
        "Thông tin dưới đây mô tả một quy trình có thể áp dụng trong tương lai; đây không phải biểu mẫu báo cáo.",
      draftNotice:
        "KHÔNG CÓ BÁO CÁO NÀO ĐƯỢC GỬI: TalkChat hiện chưa có chức năng nhắn tin, nút báo cáo, đội ngũ xem xét hay địa chỉ liên hệ để báo cáo được công bố.",
      reviewedAt: "Thông tin bản mẫu — cần rà soát trước khi ra mắt.",
      sections: [
        {
          heading: "Chức năng báo cáo hiện chưa khả dụng",
          paragraphs: [
            "Trang này không gửi báo cáo hoặc thu thập bằng chứng. Không dùng biểu mẫu đăng ký hay đăng nhập để báo cáo sự cố; các biểu mẫu đó chỉ dùng để xác thực tài khoản.",
            "Không có địa chỉ email hoặc thông tin liên hệ để báo cáo vì chưa xác định kênh hoạt động nào. Trang này không thể tiếp nhận hoặc xử lý yêu cầu.",
          ],
        },
        {
          heading: "Thông tin cần chuẩn bị cho báo cáo trong tương lai",
          paragraphs: [
            "Nếu dịch vụ ra mắt với chức năng chuyên dụng, bạn có thể cần mô tả nội dung hoặc tài khoản liên quan, nơi nội dung xuất hiện, lý do báo cáo và thời điểm ước tính. Chỉ chia sẻ thông tin thực sự cần thiết và tránh công khai dữ liệu cá nhân hoặc nội dung nhạy cảm.",
          ],
        },
        {
          heading: "Tình huống khẩn cấp",
          paragraphs: [
            "TalkChat không theo dõi trang này và không thể ứng phó với trường hợp khẩn cấp. Nếu có nguy hiểm tức thời, hãy liên hệ dịch vụ khẩn cấp hoặc cơ quan có thẩm quyền tại nơi bạn sinh sống.",
          ],
        },
        {
          heading: "Những điều cần xác định trước khi ra mắt",
          bullets: [
            "Một kênh báo cáo hoạt động và dễ tiếp cận.",
            "Các danh mục, thời hạn dự kiến, quy tắc xử lý và thông tin được lưu giữ.",
            "Biện pháp bảo vệ người báo cáo, thông báo và quy trình khiếu nại.",
            "Trách nhiệm của đơn vị vận hành và quy tắc tại các khu vực pháp lý liên quan.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Trang liên quan",
      related: [
        { label: "Quy tắc cộng đồng", to: "/legal/community" },
        { label: "Chính sách quyền riêng tư", to: "/legal/privacy" },
      ],
      backHome: "Quay về trang chủ",
    },
    security: {
      title: "Nguyên tắc bảo mật",
      summary:
        "Trang này phân biệt những giới hạn của bản minh họa với các mục tiêu cần được thiết kế trước khi có dịch vụ thực tế.",
      draftNotice:
        "KHÔNG ĐẢM BẢO AN NINH: các nguyên tắc dưới đây là mục tiêu thiết kế. Chúng không mô tả các biện pháp bảo vệ đã được triển khai hoặc kiểm tra.",
      reviewedAt: "Thông tin bản mẫu — cần rà soát trước khi ra mắt.",
      sections: [
        {
          heading: "Tình trạng hiện tại của dự án",
          paragraphs: [
            "Supabase Auth cung cấp chức năng đăng ký tài khoản, đăng nhập, quản lý phiên và khôi phục mật khẩu. Giao diện frontend này chưa triển khai nhắn tin, mã hóa đầu cuối, sao lưu an toàn, xóa tự động, giám sát, giới hạn số lần thử ở phía máy chủ hay quy trình ứng phó sự cố.",
            "Cơ chế bảo vệ tuyến đường ở frontend không phải ranh giới phân quyền và không thay thế các kiểm tra phía máy chủ hay chính sách RLS của Supabase. Chưa triển khai bảng tin nhắn hoặc hồ sơ.",
          ],
        },
        {
          heading: "Mục tiêu đề xuất cho phiên bản tương lai",
          bullets: [
            "Giảm thiểu dữ liệu thu thập và giới hạn quyền truy cập vào những thông tin cần thiết.",
            "Bảo vệ tài khoản và phiên, xác minh quyền ở phía máy chủ và kiểm tra quy tắc truy cập.",
            "Sử dụng kết nối được mã hóa khi truyền dữ liệu và không để bí mật trong mã được phân phối đến trình duyệt.",
            "Đánh giá một giao thức E2EE đã được xem xét kỹ lưỡng trước khi tuyên bố có mã hóa đầu cuối.",
            "Xác định quy tắc sao lưu, khóa khôi phục, thời hạn lưu giữ và kiểm tra khôi phục trước khi công bố.",
            "Lập kế hoạch cập nhật, rà soát, giảm thiểu nhật ký và ứng phó với lỗ hổng.",
          ],
          paragraphs: [],
        },
        {
          heading: "Giới hạn và liên hệ về bảo mật",
          paragraphs: [
            "Các mục tiêu này không phải chứng nhận hay bảo đảm bảo vệ tuyệt đối. Người phụ trách bảo mật, kênh công bố lỗ hổng, thời hạn phản hồi và thông tin liên hệ công khai vẫn chưa được xác định. Không đưa dữ liệu cá nhân hoặc bí mật vào biểu mẫu bản minh họa.",
          ],
        },
      ],
      relatedTitle: "Trang liên quan",
      related: [
        { label: "Chính sách quyền riêng tư", to: "/legal/privacy" },
        { label: "Điều khoản dịch vụ", to: "/legal/terms" },
        { label: "Cách báo cáo nội dung", to: "/legal/report" },
      ],
      backHome: "Quay về trang chủ",
    },
  },
  th: {
    terms: {
      title: "ข้อกำหนดการใช้บริการ",
      summary:
        "นี่คือร่างสำหรับบริการ TalkChat ที่อาจเปิดให้ใช้ในอนาคต ไม่ใช่ข้อตกลงทางกฎหมายที่พร้อมนำไปใช้",
      draftNotice:
        "ร่าง — ต้องผ่านการตรวจสอบทางกฎหมาย: ก่อนเปิดให้บริการต่อสาธารณะ ต้องระบุตัวตนและข้อมูลติดต่อของผู้ดำเนินการ กฎหมายที่ใช้บังคับ เงื่อนไขความรับผิด และข้อกำหนดฉบับสมบูรณ์ให้ครบถ้วน พร้อมให้ผู้เชี่ยวชาญที่มีคุณสมบัติตรวจสอบ",
      reviewedAt: "ฉบับร่าง — ยังไม่มีวันที่มีผลบังคับใช้",
      sections: [
        {
          heading: "1. สถานะปัจจุบันของโครงการ",
          paragraphs: [
            "TalkChat ใช้ Supabase Auth สำหรับบัญชี การลงชื่อเข้าใช้ และการกู้คืนรหัสผ่าน ยังไม่มีการพัฒนาระบบส่งข้อความ การจัดเก็บบทสนทนา หรือการกลั่นกรองเนื้อหา",
            "ร่างนี้ระบุประเด็นที่ต้องจัดการหากมีการเปิดบริการ ไม่ได้หมายความว่าขณะนี้มีบริการ ช่องทางช่วยเหลือ หรือกระบวนการกลั่นกรองพร้อมใช้งาน",
          ],
        },
        {
          heading: "2. การเข้าถึงและอายุขั้นต่ำที่กำหนดไว้",
          paragraphs: [
            "อินเทอร์เฟซขอวันเกิดและตรวจสอบอายุขั้นต่ำ 13 ปีในเครื่องก่อนสมัคร การตรวจสอบนี้ไม่ใช่การยืนยันตัวตน และไม่มีการบังคับใช้กฎอายุที่ฝั่งเซิร์ฟเวอร์",
            "ต้องตรวจสอบอายุขั้นต่ำ วิธีการยืนยัน และกฎสำหรับผู้เยาว์ในแต่ละประเทศที่อาจให้บริการก่อนเปิดใช้งาน",
          ],
        },
        {
          heading: "3. พฤติกรรมที่คาดหวังหากมีบริการ",
          paragraphs: [
            "ผู้ใช้บริการในอนาคตจะต้องปฏิบัติตามกฎหมายที่เกี่ยวข้องและแนวทางชุมชน การใช้งานในทางที่ผิด ความพยายามเข้าถึงโดยไม่ได้รับอนุญาต การแอบอ้างตัวตน และเนื้อหาที่ละเมิดสิทธิของผู้อื่นควรอยู่ภายใต้กฎที่ประกาศไว้และกระบวนการอุทธรณ์ที่ชัดเจน",
            "ขณะนี้ไม่มีการลงโทษ การกลั่นกรอง หรือกระบวนการอุทธรณ์ที่ดำเนินงานจริง",
          ],
        },
        {
          heading: "4. เนื้อหาและสิทธิ",
          paragraphs: [
            "ต้องระบุสิทธิในเนื้อหา การอนุญาตแบบจำกัดที่จำเป็นต่อการดำเนินบริการในอนาคต และกฎเกี่ยวกับเนื้อหาที่ผิดกฎหมายหรือถูกรายงานไว้ในฉบับสมบูรณ์ ร่างนี้ไม่ได้ให้หรืออ้างสิทธิ์อนุญาตในเนื้อหาของผู้ใช้",
          ],
        },
        {
          heading: "5. ความพร้อมใช้งาน ความรับผิด และการยุติบริการ",
          paragraphs: [
            "ฉบับนี้ไม่มีคำมั่นเกี่ยวกับความพร้อมใช้งาน การเก็บข้อความ หรือความต่อเนื่องของบริการ ต้องจัดทำและตรวจสอบข้อจำกัดความรับผิด การจำกัดความรับผิด การยุติบริการ การส่งออก และการลบข้อมูลตามกฎหมายที่ใช้บังคับก่อนเปิดบริการ",
          ],
        },
        {
          heading: "6. ผู้ดำเนินการ กฎหมายที่ใช้บังคับ และการติดต่อ",
          paragraphs: [
            "ยังไม่ได้ระบุตัวตนทางกฎหมาย ที่อยู่ ข้อมูลติดต่อของผู้ดำเนินการ กฎหมายที่ใช้บังคับ และศาลที่มีเขตอำนาจ ห้ามแต่งข้อมูลเหล่านี้ขึ้นเอง และต้องระบุให้ครบก่อนเผยแพร่",
          ],
        },
      ],
      relatedTitle: "ข้อมูลที่เกี่ยวข้อง",
      related: [
        { label: "นโยบายความเป็นส่วนตัว", to: "/legal/privacy" },
        { label: "แนวทางชุมชน", to: "/legal/community" },
        { label: "หลักการด้านความปลอดภัย", to: "/legal/security" },
      ],
      backHome: "กลับหน้าหลัก",
    },
    privacy: {
      title: "นโยบายความเป็นส่วนตัว",
      summary:
        "หน้านี้อธิบายการประมวลผลข้อมูลในปัจจุบันของ TalkChat และข้อมูลที่ยังต้องกำหนดก่อนเปิดให้บริการต่อสาธารณะ",
      draftNotice:
        "ร่าง — ต้องผ่านการตรวจสอบทางกฎหมาย: นี่ไม่ใช่คำแนะนำทางกฎหมายหรือการรับประกันการปฏิบัติตามข้อกำหนด ต้องกำหนดและตรวจสอบวัตถุประสงค์ ฐานทางกฎหมาย ผู้ควบคุมข้อมูล ผู้รับข้อมูล ระยะเวลาเก็บรักษา และสิทธิ ตามเขตอำนาจที่เกี่ยวข้องก่อนเปิดบริการ",
      reviewedAt: "ฉบับร่าง — ยังไม่มีวันที่มีผลบังคับใช้",
      sections: [
        {
          heading: "1. ข้อมูลที่เวอร์ชันปัจจุบันใช้",
          paragraphs: [
            "ระหว่างสมัครและลงชื่อเข้าใช้ ที่อยู่อีเมลและรหัสผ่านจะถูกส่งโดยตรงไปยังโปรเจกต์ Supabase ที่กำหนดค่าให้ใช้ Supabase Auth ชื่อที่แสดงจะถูกส่งเป็นข้อมูลเมตาของบัญชี วันเกิดและการยอมรับข้อกำหนดใช้เฉพาะในเบราว์เซอร์และไม่มีการส่งออกไป",
            "Supabase SDK จัดการการคงสถานะเซสชันในเบราว์เซอร์ ส่วนค่าจากแบบฟอร์มอื่นจะอยู่ในหน่วยความจำของหน้าเว็บชั่วคราว เบราว์เซอร์ของคุณอาจเสนอให้จำค่าต่าง ๆ แยกต่างหากผ่านฟังก์ชันป้อนอัตโนมัติ",
            "ค่ากำหนดธีมและภาษาจัดเก็บแยกกันในพื้นที่จัดเก็บภายในของเบราว์เซอร์ หากใช้พื้นที่จัดเก็บไม่ได้ ค่ากำหนดจะอยู่เพียงตลอดการเข้าชมครั้งปัจจุบัน",
          ],
        },
        {
          heading: "2. บริการภายนอกและบันทึกการใช้งาน",
          paragraphs: [
            "Supabase ประมวลผลข้อมูลที่จำเป็นสำหรับการยืนยันตัวตน การส่งอีเมลขึ้นอยู่กับการกำหนดค่าโปรเจกต์และผู้ให้บริการ SMTP ซึ่งยังไม่ได้ตรวจสอบ ขณะนี้ยังไม่มีบริการวิเคราะห์หรือฟังก์ชันส่งข้อความของ TalkChat ผู้ให้บริการโฮสติ้งและโครงสร้างพื้นฐานเครือข่ายอาจประมวลผลข้อมูลการเชื่อมต่อหรือจัดเก็บบันทึกการใช้งานด้วย",
          ],
        },
        {
          heading: "3. ข้อมูลที่อาจใช้ในบริการในอนาคต",
          paragraphs: [
            "ยังไม่ได้กำหนดว่าบริการในอนาคตจะเก็บข้อมูลใดจริงบ้าง อาจรวมถึงข้อมูลบัญชีและเนื้อหาหรือข้อมูลเมตาที่จำเป็นต่อการให้บริการ แต่ยังไม่ได้ตัดสินใจเกี่ยวกับรายการทั้งหมด วัตถุประสงค์ หรือฐานทางกฎหมาย",
            "ผู้รับข้อมูล ผู้ประมวลผลข้อมูล การโอนข้อมูลออกนอกภูมิภาคที่เลือก ระยะเวลาเก็บรักษา กฎการสำรองข้อมูล และขั้นตอนการลบยังต้องกำหนด ขณะนี้ไม่มีคำมั่นว่าจะลบโดยอัตโนมัติหรือเก็บไว้เป็นระยะเวลาใดโดยเฉพาะ",
          ],
        },
        {
          heading: "4. สิทธิและคำขอ",
          paragraphs: [
            "สิทธิของบุคคล วิธีใช้สิทธิ กำหนดเวลาตอบกลับ และหน่วยงานที่เกี่ยวข้องขึ้นอยู่กับสถานที่พำนักของบุคคล ผู้ดำเนินการบริการ และกฎหมายที่ใช้บังคับ ต้องเพิ่มรายละเอียดเหล่านี้ ผู้ควบคุมข้อมูล และช่องทางติดต่อที่ใช้งานได้ก่อนเปิดบริการ",
            "เดโมนี้ไม่มีช่องทางสำหรับคำขอเข้าถึง แก้ไข ลบข้อมูล หรือร้องเรียน",
          ],
        },
        {
          heading: "5. ความเป็นส่วนตัวและการเข้ารหัส",
          paragraphs: [
            "การมีหน้านี้ไม่ได้หมายความว่าบทสนทนาจะเข้ารหัสแบบต้นทางถึงปลายทาง เวอร์ชันนี้ไม่มีระบบส่งข้อความหรือการเข้ารหัส E2EE การเข้ารหัสในอนาคตและข้อจำกัดต้องอธิบายหลังจากออกแบบและตรวจสอบทางเทคนิคแล้ว",
          ],
        },
      ],
      relatedTitle: "หน้าที่เกี่ยวข้อง",
      related: [
        { label: "ข้อกำหนดการใช้บริการ", to: "/legal/terms" },
        { label: "หลักการด้านความปลอดภัย", to: "/legal/security" },
        { label: "วิธีรายงานเนื้อหา", to: "/legal/report" },
      ],
      backHome: "กลับหน้าหลัก",
    },
    community: {
      title: "แนวทางชุมชน",
      summary:
        "หลักการที่เสนอสำหรับการสนทนา หาก TalkChat กลายเป็นบริการส่งข้อความ",
      draftNotice:
        "ร่าง — ขณะนี้ TalkChat ยังไม่มีบริการส่งข้อความหรือการกลั่นกรอง แนวทางเหล่านี้ไม่ได้บังคับใช้ผ่านระบบที่ดำเนินงานจริง",
      reviewedAt: "หลักการที่เสนอ — ยังไม่มีวันที่มีผลบังคับใช้",
      sections: [
        {
          heading: "ความเคารพและความปลอดภัย",
          paragraphs: [
            "ปฏิบัติต่อผู้อื่นด้วยความเคารพ การข่มขู่ การคุกคามเจาะจงกลุ่มเป้าหมาย ความเกลียดชัง การข่มขวัญ และการสนับสนุนความรุนแรงไม่ควรมีที่อยู่ในชุมชนที่ปลอดภัย",
            "อย่าเปิดเผยข้อมูลส่วนตัวของผู้อื่นโดยไม่ได้รับอนุญาต อย่าแอบอ้างเป็นผู้อื่นหรือพยายามเข้าถึงบัญชีหรืออุปกรณ์โดยไม่ได้รับอนุญาต",
          ],
        },
        {
          heading: "เนื้อหาและการชักชวน",
          paragraphs: [
            "อย่าส่งเนื้อหาผิดกฎหมาย การฉ้อโกง มัลแวร์ สแปม หรือการชักชวนที่ไม่พึงประสงค์ซ้ำ ๆ เคารพลิขสิทธิ์และสิทธิอื่นตามกฎหมายที่ใช้บังคับ",
            "หลักการเหล่านี้เป็นข้อเสนอเชิงบรรณาธิการ ต้องกำหนดเนื้อหาต้องห้าม ข้อยกเว้น มาตรการที่อาจใช้ และช่องทางอุทธรณ์ก่อนเปิดบริการ",
          ],
        },
        {
          heading: "ผู้เยาว์และการรายงาน",
          paragraphs: [
            "อย่ามุ่งเป้าไปยังผู้เยาว์อย่างไม่เหมาะสม หรือแบ่งปันภาพและข้อมูลที่อาจทำให้พวกเขาตกอยู่ในความเสี่ยง ต้องออกแบบกฎคุ้มครอง การจัดการรายงาน และการส่งต่อกรณีโดยมีมาตรการป้องกันที่เหมาะสมก่อนเปิดบริการต่อสาธารณะ",
            "เดโมไม่มีฟังก์ชันรายงานหรือกลั่นกรอง โปรดดูหน้าที่จัดไว้เพื่ออ่านข้อจำกัดนี้",
          ],
        },
        {
          heading: "การบังคับใช้",
          paragraphs: [
            "เวอร์ชันนี้ไม่มีทีมกลั่นกรอง กลไกบล็อก หรือกระบวนการลงโทษและอุทธรณ์ อย่าพึ่งพาแนวทางเหล่านี้ว่าจะมีการเข้าแทรกแซงจริง",
          ],
        },
      ],
      relatedTitle: "หน้าที่เกี่ยวข้อง",
      related: [
        { label: "วิธีรายงานเนื้อหา", to: "/legal/report" },
        { label: "หลักการด้านความปลอดภัย", to: "/legal/security" },
        { label: "นโยบายความเป็นส่วนตัว", to: "/legal/privacy" },
      ],
      backHome: "กลับหน้าหลัก",
    },
    report: {
      title: "รายงานเนื้อหาหรือบัญชี",
      summary:
        "ข้อมูลด้านล่างอธิบายกระบวนการที่อาจใช้ในอนาคต ไม่ใช่แบบฟอร์มรายงาน",
      draftNotice:
        "ไม่มีการส่งรายงาน: TalkChat ยังไม่มีระบบส่งข้อความ ปุ่มรายงาน ทีมตรวจสอบ หรือที่อยู่อีเมลสำหรับรายงานที่เผยแพร่ไว้",
      reviewedAt: "ข้อมูลต้นแบบ — ต้องตรวจสอบก่อนเปิดบริการ",
      sections: [
        {
          heading: "ยังไม่มีฟังก์ชันรายงาน",
          paragraphs: [
            "หน้านี้ไม่ส่งรายงานและไม่เก็บหลักฐาน อย่าใช้แบบฟอร์มสมัครหรือลงชื่อเข้าใช้เพื่อรายงานปัญหา เพราะมีไว้สำหรับการยืนยันบัญชีเท่านั้น",
            "ไม่มีที่อยู่อีเมลหรือข้อมูลติดต่อสำหรับรายงาน เนื่องจากยังไม่ได้กำหนดช่องทางที่ดำเนินงานได้ หน้านี้ไม่สามารถรับหรือจัดการคำขอได้",
          ],
        },
        {
          heading: "ข้อมูลที่ควรเตรียมสำหรับการรายงานในอนาคต",
          paragraphs: [
            "หากเปิดบริการพร้อมฟังก์ชันเฉพาะ อาจเป็นประโยชน์หากอธิบายเนื้อหาหรือบัญชีที่เกี่ยวข้อง ตำแหน่งที่พบ เหตุผลที่รายงาน และเวลาคร่าว ๆ ส่งเฉพาะข้อมูลที่จำเป็นอย่างยิ่ง และหลีกเลี่ยงการเผยแพร่ข้อมูลส่วนบุคคลหรือเนื้อหาที่ละเอียดอ่อนต่อสาธารณะ",
          ],
        },
        {
          heading: "สถานการณ์เร่งด่วน",
          paragraphs: [
            "TalkChat ไม่ได้เฝ้าติดตามหน้านี้และไม่สามารถตอบสนองต่อเหตุฉุกเฉิน หากมีอันตรายเร่งด่วน โปรดติดต่อหน่วยฉุกเฉินหรือหน่วยงานที่มีอำนาจในพื้นที่ที่คุณอาศัยอยู่",
          ],
        },
        {
          heading: "สิ่งที่ต้องกำหนดก่อนเปิดบริการ",
          bullets: [
            "ช่องทางรายงานที่ใช้งานได้จริงและเข้าถึงได้",
            "หมวดหมู่ กรอบเวลาที่คาดหมาย กฎการจัดการ และข้อมูลที่เก็บรักษา",
            "การคุ้มครองผู้รายงาน การแจ้งเตือน และกระบวนการอุทธรณ์",
            "ความรับผิดชอบของผู้ดำเนินการและกฎในเขตอำนาจที่เกี่ยวข้อง",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "หน้าที่เกี่ยวข้อง",
      related: [
        { label: "แนวทางชุมชน", to: "/legal/community" },
        { label: "นโยบายความเป็นส่วนตัว", to: "/legal/privacy" },
      ],
      backHome: "กลับหน้าหลัก",
    },
    security: {
      title: "หลักการด้านความปลอดภัย",
      summary:
        "หน้านี้แยกข้อจำกัดของเดโมออกจากเป้าหมายที่ต้องออกแบบก่อนมีบริการจริง",
      draftNotice:
        "ไม่มีการรับประกันความปลอดภัย: หลักการด้านล่างเป็นเป้าหมายการออกแบบ ไม่ได้อธิบายมาตรการป้องกันที่นำไปใช้หรือตรวจสอบแล้ว",
      reviewedAt: "ข้อมูลต้นแบบ — ต้องตรวจสอบก่อนเปิดบริการ",
      sections: [
        {
          heading: "สถานะปัจจุบันของโครงการ",
          paragraphs: [
            "Supabase Auth ให้บริการลงทะเบียนบัญชี การลงชื่อเข้าใช้ การจัดการเซสชัน และการกู้คืนรหัสผ่าน ส่วน frontend นี้ยังไม่มีระบบส่งข้อความ การเข้ารหัสต้นทางถึงปลายทาง การสำรองข้อมูลที่ปลอดภัย การลบอัตโนมัติ การเฝ้าระวัง การจำกัดจำนวนครั้งที่ฝั่งเซิร์ฟเวอร์ หรือกระบวนการรับมือเหตุการณ์",
            "ตัวป้องกันเส้นทางใน frontend ไม่ใช่ขอบเขตการอนุญาต และใช้แทนการตรวจสอบฝั่งเซิร์ฟเวอร์หรือนโยบาย RLS ของ Supabase ไม่ได้ ยังไม่มีการพัฒนาตารางข้อความหรือโปรไฟล์",
          ],
        },
        {
          heading: "เป้าหมายที่เสนอสำหรับเวอร์ชันในอนาคต",
          bullets: [
            "ลดข้อมูลที่เก็บและจำกัดการเข้าถึงเฉพาะข้อมูลที่จำเป็น",
            "ปกป้องบัญชีและเซสชัน ตรวจสอบสิทธิ์ฝั่งเซิร์ฟเวอร์ และทดสอบกฎการเข้าถึง",
            "ใช้การเชื่อมต่อที่เข้ารหัสระหว่างส่งข้อมูล และไม่นำความลับใส่ในโค้ดที่ส่งไปยังเบราว์เซอร์",
            "ประเมินโปรโตคอล E2EE ที่ผ่านการตรวจสอบอย่างรอบคอบก่อนกล่าวอ้างเรื่องการเข้ารหัสต้นทางถึงปลายทาง",
            "กำหนดการสำรองข้อมูล กุญแจกู้คืน ระยะเวลาเก็บรักษา และการทดสอบกู้คืนก่อนประกาศ",
            "วางแผนการอัปเดต การตรวจสอบ การลดบันทึกการใช้งาน และการรับมือช่องโหว่",
          ],
          paragraphs: [],
        },
        {
          heading: "ข้อจำกัดและช่องทางติดต่อด้านความปลอดภัย",
          paragraphs: [
            "เป้าหมายเหล่านี้ไม่ใช่การรับรองหรือการรับประกันการป้องกันอย่างสมบูรณ์ ยังไม่ได้กำหนดผู้รับผิดชอบด้านความปลอดภัย ช่องทางเปิดเผยช่องโหว่ ระยะเวลาตอบกลับ และข้อมูลติดต่อสาธารณะ อย่าใส่ข้อมูลส่วนบุคคลหรือความลับในแบบฟอร์มเดโม",
          ],
        },
      ],
      relatedTitle: "หน้าที่เกี่ยวข้อง",
      related: [
        { label: "นโยบายความเป็นส่วนตัว", to: "/legal/privacy" },
        { label: "ข้อกำหนดการใช้บริการ", to: "/legal/terms" },
        { label: "วิธีรายงานเนื้อหา", to: "/legal/report" },
      ],
      backHome: "กลับหน้าหลัก",
    },
  },
  sv: {
    terms: {
      title: "Användarvillkor",
      summary:
        "Det här är ett arbetsutkast för en möjlig framtida TalkChat-tjänst. Det är inte ett färdigt juridiskt avtal.",
      draftNotice:
        "UTKAST — JURIDISK GRANSKNING KRÄVS: före en offentlig lansering måste operatörens identitet och kontaktuppgifter, tillämplig lag, ansvarsbestämmelser och slutliga villkor kompletteras och granskas av en kvalificerad jurist.",
      reviewedAt: "Utkast — inget ikraftträdandedatum.",
      sections: [
        {
          heading: "1. Projektets aktuella status",
          paragraphs: [
            "TalkChat använder Supabase Auth för konton, inloggning och lösenordsåterställning. Meddelanden, lagring av konversationer och moderering är inte implementerade.",
            "Det här utkastet tar upp frågor att hantera om en tjänst lanseras. Det innebär inte att en tjänst, supportkanal eller modereringsprocess finns tillgänglig i dag.",
          ],
        },
        {
          heading: "2. Avsedd åtkomst och lägsta ålder",
          paragraphs: [
            "Gränssnittet efterfrågar ett födelsedatum och kontrollerar lokalt en lägsta ålder på 13 år före registrering. Detta är ingen identitetskontroll, och ingen åldersregel tillämpas på serversidan.",
            "Lägsta ålder, verifieringsmetod och regler för minderåriga måste granskas för varje land där tjänsten kan erbjudas före lansering.",
          ],
        },
        {
          heading: "3. Förväntat beteende om en tjänst finns",
          paragraphs: [
            "Användare av en framtida tjänst förväntas följa tillämplig lag och gemenskapsreglerna. Missbruk, försök till obehörig åtkomst, identitetsförfalskning och innehåll som kränker andras rättigheter behöver hanteras enligt publicerade regler och en fastställd överklagandeprocess.",
            "Inga faktiska sanktioner, moderering eller överklagandeprocesser är i drift.",
          ],
        },
        {
          heading: "4. Innehåll och rättigheter",
          paragraphs: [
            "Rättigheter till innehåll, eventuella begränsade tillstånd som behövs för att driva en framtida tjänst och regler för olagligt eller rapporterat innehåll måste anges i en slutlig version. Det här utkastet varken beviljar eller gör anspråk på någon licens till användarinnehåll.",
          ],
        },
        {
          heading: "5. Tillgänglighet, ansvar och avslutande av tjänsten",
          paragraphs: [
            "Den här versionen innehåller inga utfästelser om tillgänglighet, lagring av meddelanden eller tjänstens kontinuitet. Ansvarsfriskrivningar, ansvarsbegränsningar, uppsägning, export och raderingsregler måste utarbetas och granskas enligt tillämplig lag före lansering.",
          ],
        },
        {
          heading: "6. Operatör, tillämplig lag och kontakt",
          paragraphs: [
            "Operatörens juridiska identitet, adress, kontaktuppgifter, tillämplig lag och behöriga domstolar anges inte. Uppgifterna får inte hittas på och måste kompletteras före publicering.",
          ],
        },
      ],
      relatedTitle: "Relaterad information",
      related: [
        { label: "Integritetspolicy", to: "/legal/privacy" },
        { label: "Gemenskapsregler", to: "/legal/community" },
        { label: "Säkerhetsprinciper", to: "/legal/security" },
      ],
      backHome: "Tillbaka till startsidan",
    },
    privacy: {
      title: "Integritetspolicy",
      summary:
        "Den här sidan beskriver TalkChats nuvarande behandling och den information som behöver fastställas före en offentlig lansering.",
      draftNotice:
        "UTKAST — JURIDISK GRANSKNING KRÄVS: detta är inte juridisk rådgivning eller en garanti för efterlevnad. Ändamål, rättsliga grunder, personuppgiftsansvariga, mottagare, lagringstider och rättigheter måste fastställas och granskas för relevanta jurisdiktioner före lansering.",
      reviewedAt: "Utkast — inget ikraftträdandedatum.",
      sections: [
        {
          heading: "1. Data som används av den aktuella versionen",
          paragraphs: [
            "Vid registrering och inloggning skickas e-postadressen och lösenordet direkt till det konfigurerade Supabase-projektet för Supabase Auth. Visningsnamnet skickas som kontometadata. Födelsedatum och godkännande av villkoren används endast i webbläsaren och skickas inte.",
            "Supabase SDK hanterar sessionspersistens i webbläsaren. Övriga formulärvärden finns tillfälligt i sidans minne; webbläsaren kan separat erbjuda sig att komma ihåg fält med sin funktion för automatisk ifyllning.",
            "Tema- och språkinställningar lagras separat i webbläsarens lokala lagring. Om lagringen inte är tillgänglig behålls de endast under det aktuella besöket.",
          ],
        },
        {
          heading: "2. Externa tjänster och loggar",
          paragraphs: [
            "Supabase behandlar data som behövs för autentisering. E-postleverans beror på projektets konfiguration och SMTP-leverantör; denna konfiguration har inte verifierats. Ingen analystjänst eller meddelandefunktion från TalkChat är implementerad. Webbhotellsleverantören och nätverksinfrastrukturen kan också behandla anslutningsdata eller föra loggar.",
          ],
        },
        {
          heading: "3. Möjliga data i en framtida tjänst",
          paragraphs: [
            "Vilka uppgifter en framtida tjänst faktiskt samlar in har inte fastställts. Det kan omfatta kontoinformation samt innehåll eller metadata som behövs för att driva tjänsten, men ingen fullständig lista, inget ändamål och ingen rättslig grund har beslutats ännu.",
            "Mottagare, personuppgiftsbiträden, eventuella överföringar utanför den valda regionen, lagringstider, regler för säkerhetskopiering och raderingsrutiner återstår att fastställa. Ingen automatisk radering eller särskild lagringstid utlovas för närvarande.",
          ],
        },
        {
          heading: "4. Rättigheter och begäranden",
          paragraphs: [
            "Enskildas rättigheter, hur de utövas, svarstider och relevant myndighet beror bland annat på var personerna bor, vem som driver tjänsten och tillämplig lag. Dessa uppgifter, den personuppgiftsansvariga och en giltig kontaktväg måste läggas till före lansering.",
            "Den här demon har ingen kanal för begäranden om tillgång, rättelse, radering eller klagomål.",
          ],
        },
        {
          heading: "5. Integritet och kryptering",
          paragraphs: [
            "Att den här sidan finns innebär inte att konversationer är totalsträckskrypterade. Den här versionen har inget meddelandesystem eller E2EE-kryptering. Eventuell framtida kryptering och dess begränsningar måste beskrivas efter teknisk utformning och granskning.",
          ],
        },
      ],
      relatedTitle: "Relaterade sidor",
      related: [
        { label: "Användarvillkor", to: "/legal/terms" },
        { label: "Säkerhetsprinciper", to: "/legal/security" },
        { label: "Så rapporterar du innehåll", to: "/legal/report" },
      ],
      backHome: "Tillbaka till startsidan",
    },
    community: {
      title: "Gemenskapsregler",
      summary:
        "Föreslagna principer för samtal om TalkChat blir en meddelandetjänst.",
      draftNotice:
        "UTKAST — TalkChat erbjuder för närvarande inte meddelanden eller moderering. Dessa regler tillämpas inte av något operativt system.",
      reviewedAt: "Föreslagna principer — inget ikraftträdandedatum.",
      sections: [
        {
          heading: "Respekt och säkerhet",
          paragraphs: [
            "Behandla andra med respekt. Hot, riktade trakasserier, hat, skrämsel och uppmaningar till våld hör inte hemma i en trygg gemenskap.",
            "Dela inte någon annans privata information utan tillstånd. Utge dig inte för att vara någon annan och försök inte få åtkomst till ett konto eller en enhet utan behörighet.",
          ],
        },
        {
          heading: "Innehåll och värvning",
          paragraphs: [
            "Skicka inte olagligt innehåll, bedrägerier, skadlig programvara, skräppost eller upprepade oönskade värvningsmeddelanden. Respektera upphovsrätt och andra tillämpliga rättigheter.",
            "Dessa principer är ett redaktionellt förslag. Definitioner av förbjudet innehåll, undantag, möjliga åtgärder och överklagandevägar måste fastställas före lansering.",
          ],
        },
        {
          heading: "Minderåriga och rapportering",
          paragraphs: [
            "Rikta inte olämpligt in dig på minderåriga och dela inte bilder eller information som kan utsätta dem för risk. Skyddsregler, hantering av rapporter och eskalering måste utformas med lämpliga skyddsåtgärder före en offentlig lansering.",
            "Demon har ingen rapporterings- eller modereringsfunktion. Se den särskilda sidan för information om denna begränsning.",
          ],
        },
        {
          heading: "Tillämpning",
          paragraphs: [
            "Den här versionen har inget modereringsteam, ingen blockeringsfunktion och ingen process för sanktioner eller överklaganden. Förlita dig inte på dessa regler som ett faktiskt ingripande.",
          ],
        },
      ],
      relatedTitle: "Relaterade sidor",
      related: [
        { label: "Så rapporterar du innehåll", to: "/legal/report" },
        { label: "Säkerhetsprinciper", to: "/legal/security" },
        { label: "Integritetspolicy", to: "/legal/privacy" },
      ],
      backHome: "Tillbaka till startsidan",
    },
    report: {
      title: "Rapportera innehåll eller ett konto",
      summary:
        "Informationen nedan beskriver en möjlig framtida process; det är inte ett rapporteringsformulär.",
      draftNotice:
        "INGEN RAPPORT SKICKAS: TalkChat har ännu ingen meddelandefunktion, rapportknapp, granskningsteam eller publicerad kontaktadress för rapportering.",
      reviewedAt: "Prototypinformation — granska före lansering.",
      sections: [
        {
          heading: "Rapportering är inte tillgänglig ännu",
          paragraphs: [
            "Den här sidan skickar ingen rapport och samlar inte in bevis. Använd inte registrerings- eller inloggningsformulären för att rapportera ett problem; de är endast till för kontoautentisering.",
            "Ingen e-postadress eller kontaktinformation för rapportering anges eftersom ingen fungerande kanal har fastställts. Den här sidan kan inte ta emot eller behandla en begäran.",
          ],
        },
        {
          heading: "Information att förbereda för en framtida rapport",
          paragraphs: [
            "Om en tjänst lanseras med en särskild funktion kan det vara användbart att beskriva innehållet eller kontot, var det visas, anledningen till rapporten och ungefär när det inträffade. Dela endast information som är absolut nödvändig och undvik att offentliggöra personuppgifter eller känsligt innehåll.",
          ],
        },
        {
          heading: "Brådskande situationer",
          paragraphs: [
            "TalkChat övervakar inte den här sidan och kan inte agera vid nödsituationer. Vid omedelbar fara ska du kontakta räddningstjänsten eller behöriga myndigheter där du bor.",
          ],
        },
        {
          heading: "Det som måste fastställas före lansering",
          bullets: [
            "En fungerande och tillgänglig rapporteringskanal.",
            "Kategorier, vägledande tidsfrister, hanteringsregler och uppgifter som sparas.",
            "Skydd för rapportörer, aviseringar och en överklagandeprocess.",
            "Operatörens ansvar och regler i relevanta jurisdiktioner.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Relaterade sidor",
      related: [
        { label: "Gemenskapsregler", to: "/legal/community" },
        { label: "Integritetspolicy", to: "/legal/privacy" },
      ],
      backHome: "Tillbaka till startsidan",
    },
    security: {
      title: "Säkerhetsprinciper",
      summary:
        "Den här sidan skiljer mellan demon begränsningar och mål som måste utformas före en riktig tjänst.",
      draftNotice:
        "INGEN SÄKERHETSGARANTI: principerna nedan är designmål. De beskriver inte skydd som redan har implementerats eller granskats.",
      reviewedAt: "Prototypinformation — granska före lansering.",
      sections: [
        {
          heading: "Projektets aktuella status",
          paragraphs: [
            "Supabase Auth tillhandahåller kontoregistrering, inloggning, sessionshantering och lösenordsåterställning. Den här frontend-versionen har inte meddelanden, totalsträckskryptering, säkra säkerhetskopior, automatisk radering, övervakning, serverbaserade gränser för antal försök eller en incidenthanteringsprocess.",
            "Frontendens ruttspärr är ingen behörighetsgräns och ersätter inte serverkontroller eller Supabase RLS-policyer. Inga meddelande- eller profiltabeller är implementerade.",
          ],
        },
        {
          heading: "Föreslagna mål för en framtida version",
          bullets: [
            "Minimera insamlade data och begränsa åtkomst till det som behövs.",
            "Skydda konton och sessioner, verifiera behörigheter på serversidan och testa åtkomstregler.",
            "Använd krypterade anslutningar under överföring och håll hemligheter borta från kod som levereras till webbläsaren.",
            "Utvärdera ett väl granskat E2EE-protokoll innan något påstående om totalsträckskryptering görs.",
            "Fastställ säkerhetskopior, återställningsnycklar, lagring och återställningstester innan de utlovas.",
            "Planera uppdateringar, granskningar, minimerade loggar och hantering av sårbarheter.",
          ],
          paragraphs: [],
        },
        {
          heading: "Begränsningar och säkerhetskontakt",
          paragraphs: [
            "Dessa mål är varken en certifiering eller en garanti för absolut skydd. Säkerhetsansvarig, kanal för ansvarsfull rapportering, svarstider och offentliga kontaktuppgifter har ännu inte fastställts. Ange inte personuppgifter eller hemligheter i demon formulär.",
          ],
        },
      ],
      relatedTitle: "Relaterade sidor",
      related: [
        { label: "Integritetspolicy", to: "/legal/privacy" },
        { label: "Användarvillkor", to: "/legal/terms" },
        { label: "Så rapporterar du innehåll", to: "/legal/report" },
      ],
      backHome: "Tillbaka till startsidan",
    },
  },
  nb: {
    terms: {
      title: "Vilkår for bruk",
      summary:
        "Dette er et arbeidsutkast for en mulig fremtidig TalkChat-tjeneste. Det er ikke en ferdig juridisk avtale.",
      draftNotice:
        "UTKAST — JURIDISK GJENNOMGANG KREVES: før en offentlig lansering må operatørens identitet og kontaktinformasjon, gjeldende lov, ansvarsbestemmelser og endelige vilkår ferdigstilles og gjennomgås av en kvalifisert fagperson.",
      reviewedAt: "Utkast — ingen ikrafttredelsesdato.",
      sections: [
        {
          heading: "1. Prosjektets nåværende status",
          paragraphs: [
            "TalkChat bruker Supabase Auth for kontoer, innlogging og tilbakestilling av passord. Meldinger, lagring av samtaler og moderering er ikke implementert.",
            "Dette utkastet lister opp temaer som må håndteres hvis en tjeneste lanseres. Det betyr ikke at en tjeneste, supportkanal eller modereringsprosess er tilgjengelig i dag.",
          ],
        },
        {
          heading: "2. Tiltenkt tilgang og minstealder",
          paragraphs: [
            "Grensesnittet ber om fødselsdato og kontrollerer lokalt en minstealder på 13 år før registrering. Dette er ikke identitetskontroll, og ingen aldersregel håndheves på serversiden.",
            "Minstealder, verifiseringsmetode og regler for mindreårige må vurderes for hvert land der tjenesten kan tilbys, før lansering.",
          ],
        },
        {
          heading: "3. Forventet atferd hvis en tjeneste finnes",
          paragraphs: [
            "Brukere av en fremtidig tjeneste må følge gjeldende lov og fellesskapsreglene. Misbruk, forsøk på uautorisert tilgang, identitetstyveri og innhold som krenker andres rettigheter, må håndteres etter publiserte regler og en definert klageprosess.",
            "Ingen faktiske sanksjoner, moderering eller klageprosess er i drift.",
          ],
        },
        {
          heading: "4. Innhold og rettigheter",
          paragraphs: [
            "Rettigheter til innhold, eventuelle begrensede tillatelser som trengs for å drive en fremtidig tjeneste, og regler for ulovlig eller rapportert innhold må spesifiseres i en endelig versjon. Dette utkastet gir eller krever ingen lisens til brukerinnhold.",
          ],
        },
        {
          heading: "5. Tilgjengelighet, ansvar og avslutning av tjenesten",
          paragraphs: [
            "Denne versjonen gir ingen løfter om tilgjengelighet, lagring av meldinger eller kontinuitet i tjenesten. Ansvarsfraskrivelser, ansvarsbegrensninger, oppsigelse, eksport og sletting må utarbeides og gjennomgås i henhold til gjeldende lov før lansering.",
          ],
        },
        {
          heading: "6. Operatør, gjeldende lov og kontakt",
          paragraphs: [
            "Operatørens juridiske identitet, adresse, kontaktinformasjon, gjeldende lov og kompetente domstoler er ikke oppgitt. Disse opplysningene må ikke diktes opp og må fylles inn før publisering.",
          ],
        },
      ],
      relatedTitle: "Relatert informasjon",
      related: [
        { label: "Personvernerklæring", to: "/legal/privacy" },
        { label: "Fellesskapsregler", to: "/legal/community" },
        { label: "Sikkerhetsprinsipper", to: "/legal/security" },
      ],
      backHome: "Tilbake til startsiden",
    },
    privacy: {
      title: "Personvernerklæring",
      summary:
        "Denne siden beskriver TalkChats nåværende behandling og informasjonen som må avklares før en offentlig lansering.",
      draftNotice:
        "UTKAST — JURIDISK GJENNOMGANG KREVES: dette er ikke juridisk rådgivning eller en garanti for etterlevelse. Formål, rettslig grunnlag, behandlingsansvarlige, mottakere, lagringstider og rettigheter må fastsettes og vurderes for relevante jurisdiksjoner før lansering.",
      reviewedAt: "Utkast — ingen ikrafttredelsesdato.",
      sections: [
        {
          heading: "1. Data som brukes av den nåværende versjonen",
          paragraphs: [
            "Ved registrering og innlogging sendes e-postadressen og passordet direkte til det konfigurerte Supabase-prosjektet for Supabase Auth. Visningsnavnet sendes som kontometadata. Fødselsdato og godkjenning av vilkårene brukes bare i nettleseren og sendes ikke.",
            "Supabase SDK håndterer lagring av økten i nettleseren. Andre skjemaverdier ligger midlertidig i sidens minne; nettleseren kan uavhengig tilby å huske felter gjennom funksjonen for autofyll.",
            "Tema- og språkinnstillinger lagres separat i nettleserens lokale lagring. Hvis lagringen ikke er tilgjengelig, beholdes de bare for det gjeldende besøket.",
          ],
        },
        {
          heading: "2. Eksterne tjenester og logger",
          paragraphs: [
            "Supabase behandler data som er nødvendige for autentisering. E-postlevering avhenger av prosjektets konfigurasjon og SMTP-leverandør; denne konfigurasjonen er ikke verifisert. Ingen analysetjeneste eller TalkChat-meldingsfunksjon er implementert. Hostingleverandøren og nettverksinfrastrukturen kan også behandle tilkoblingsdata eller føre logger.",
          ],
        },
        {
          heading: "3. Mulige data i en fremtidig tjeneste",
          paragraphs: [
            "Hvilke data en fremtidig tjeneste faktisk samler inn, er ikke fastsatt. Det kan omfatte kontoinformasjon og innhold eller metadata som trengs for å drive tjenesten, men ingen fullstendig liste, formål eller rettslig grunnlag er besluttet ennå.",
            "Mottakere, databehandlere, mulige overføringer utenfor den valgte regionen, lagringstider, regler for sikkerhetskopiering og sletterutiner må fortsatt fastsettes. Det loves for øyeblikket ingen automatisk sletting eller bestemt lagringsperiode.",
          ],
        },
        {
          heading: "4. Rettigheter og forespørsler",
          paragraphs: [
            "Personers rettigheter, hvordan de kan utøves, svarfrister og relevant myndighet avhenger blant annet av hvor personene bor, hvem som driver tjenesten og gjeldende lov. Disse opplysningene, den behandlingsansvarlige og en gyldig kontaktmåte må legges til før lansering.",
            "Denne demoen har ingen kanal for forespørsler om innsyn, retting, sletting eller klager.",
          ],
        },
        {
          heading: "5. Personvern og kryptering",
          paragraphs: [
            "At denne siden finnes, betyr ikke at samtaler er ende-til-ende-kryptert. Denne versjonen har ikke meldingssystem eller E2EE-kryptering. Eventuell fremtidig kryptering og begrensningene ved den må beskrives etter teknisk utforming og gjennomgang.",
          ],
        },
      ],
      relatedTitle: "Relaterte sider",
      related: [
        { label: "Vilkår for bruk", to: "/legal/terms" },
        { label: "Sikkerhetsprinsipper", to: "/legal/security" },
        { label: "Slik rapporterer du innhold", to: "/legal/report" },
      ],
      backHome: "Tilbake til startsiden",
    },
    community: {
      title: "Fellesskapsregler",
      summary:
        "Foreslåtte prinsipper for samtaler hvis TalkChat blir en meldingstjeneste.",
      draftNotice:
        "UTKAST — TalkChat tilbyr for øyeblikket ikke meldinger eller moderering. Disse reglene håndheves ikke av et operativt system.",
      reviewedAt: "Foreslåtte prinsipper — ingen ikrafttredelsesdato.",
      sections: [
        {
          heading: "Respekt og trygghet",
          paragraphs: [
            "Behandle andre med respekt. Trusler, målrettet trakassering, hat, skremming og oppfordringer til vold hører ikke hjemme i et trygt fellesskap.",
            "Ikke del andres private opplysninger uten tillatelse. Ikke utgi deg for å være andre eller forsøk å få tilgang til en konto eller enhet uten tillatelse.",
          ],
        },
        {
          heading: "Innhold og verving",
          paragraphs: [
            "Ikke send ulovlig innhold, svindel, skadelig programvare, søppelpost eller gjentatte uønskede vervingsmeldinger. Respekter opphavsrett og andre gjeldende rettigheter.",
            "Disse prinsippene er et redaksjonelt forslag. Definisjoner av forbudt innhold, unntak, mulige tiltak og klagemuligheter må fastsettes før lansering.",
          ],
        },
        {
          heading: "Mindreårige og rapportering",
          paragraphs: [
            "Ikke rett deg upassende mot mindreårige eller del bilder eller opplysninger som kan sette dem i fare. Beskyttelsesregler, håndtering av rapporter og eskalering må utformes med passende sikkerhetstiltak før en offentlig lansering.",
            "Demoen har ingen rapporterings- eller modereringsfunksjon. Se den egne siden for denne begrensningen.",
          ],
        },
        {
          heading: "Håndheving",
          paragraphs: [
            "Denne versjonen har ikke noe modereringsteam, blokkeringsfunksjon eller prosess for sanksjoner og klager. Ikke stol på disse reglene som et faktisk inngrep.",
          ],
        },
      ],
      relatedTitle: "Relaterte sider",
      related: [
        { label: "Slik rapporterer du innhold", to: "/legal/report" },
        { label: "Sikkerhetsprinsipper", to: "/legal/security" },
        { label: "Personvernerklæring", to: "/legal/privacy" },
      ],
      backHome: "Tilbake til startsiden",
    },
    report: {
      title: "Rapporter innhold eller en konto",
      summary:
        "Informasjonen nedenfor beskriver en mulig fremtidig prosess; det er ikke et rapporteringsskjema.",
      draftNotice:
        "INGEN RAPPORT SENDES: TalkChat har ennå ikke meldinger, rapporteringsknapp, gjennomgangsteam eller en publisert kontaktadresse for rapportering.",
      reviewedAt: "Prototypeinformasjon — gjennomgå før lansering.",
      sections: [
        {
          heading: "Rapportering er ikke tilgjengelig ennå",
          paragraphs: [
            "Denne siden sender ingen rapport og samler ikke inn bevis. Ikke bruk registrerings- eller innloggingsskjemaene til å rapportere et problem; de brukes bare til kontoautentisering.",
            "Ingen e-postadresse eller kontaktinformasjon for rapportering er oppgitt fordi ingen operativ kanal er fastsatt. Denne siden kan ikke motta eller behandle en forespørsel.",
          ],
        },
        {
          heading: "Informasjon du bør forberede til en fremtidig rapport",
          paragraphs: [
            "Hvis en tjeneste lanseres med en egen funksjon, kan det være nyttig å beskrive det aktuelle innholdet eller kontoen, hvor det vises, årsaken til rapporten og omtrent når det skjedde. Del bare informasjon som er strengt nødvendig, og unngå å offentliggjøre personopplysninger eller sensitivt innhold.",
          ],
        },
        {
          heading: "Hastesituasjoner",
          paragraphs: [
            "TalkChat overvåker ikke denne siden og kan ikke håndtere nødsituasjoner. Ved umiddelbar fare må du kontakte nødetatene eller kompetente myndigheter der du bor.",
          ],
        },
        {
          heading: "Dette må fastsettes før lansering",
          bullets: [
            "En operativ og tilgjengelig rapporteringskanal.",
            "Kategorier, veiledende tidsfrister, behandlingsregler og informasjon som lagres.",
            "Beskyttelse av rapportører, varsler og en klageprosess.",
            "Operatørens ansvar og regler i relevante jurisdiksjoner.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Relaterte sider",
      related: [
        { label: "Fellesskapsregler", to: "/legal/community" },
        { label: "Personvernerklæring", to: "/legal/privacy" },
      ],
      backHome: "Tilbake til startsiden",
    },
    security: {
      title: "Sikkerhetsprinsipper",
      summary:
        "Denne siden skiller mellom demoens begrensninger og mål som må utformes før en reell tjeneste.",
      draftNotice:
        "INGEN SIKKERHETSGARANTI: prinsippene nedenfor er designmål. De beskriver ikke beskyttelse som allerede er implementert eller revidert.",
      reviewedAt: "Prototypeinformasjon — gjennomgå før lansering.",
      sections: [
        {
          heading: "Prosjektets nåværende status",
          paragraphs: [
            "Supabase Auth tilbyr kontoregistrering, innlogging, økthåndtering og tilbakestilling av passord. Denne frontend-versjonen implementerer ikke meldinger, ende-til-ende-kryptering, sikre sikkerhetskopier, automatisk sletting, overvåking, serverbaserte begrensninger på antall forsøk eller en prosess for hendelseshåndtering.",
            "Frontendens rutevakt er ikke en autorisasjonsgrense og erstatter ikke kontroller på serversiden eller Supabase RLS-policyer. Ingen meldings- eller profiltabeller er implementert.",
          ],
        },
        {
          heading: "Foreslåtte mål for en fremtidig versjon",
          bullets: [
            "Begrense innsamlede data og tilgang til det som er nødvendig.",
            "Beskytte kontoer og økter, verifisere tillatelser på serversiden og teste tilgangsregler.",
            "Bruke krypterte tilkoblinger under overføring og holde hemmeligheter utenfor kode som leveres til nettleseren.",
            "Vurdere en grundig gjennomgått E2EE-protokoll før man hevder at ende-til-ende-kryptering finnes.",
            "Fastsette sikkerhetskopier, gjenopprettingsnøkler, lagring og gjenopprettingstester før de kunngjøres.",
            "Planlegge oppdateringer, gjennomganger, minimerte logger og håndtering av sårbarheter.",
          ],
          paragraphs: [],
        },
        {
          heading: "Begrensninger og sikkerhetskontakt",
          paragraphs: [
            "Disse målene er verken en sertifisering eller en garanti for absolutt beskyttelse. Sikkerhetsansvarlig, kanal for sårbarhetsrapportering, svarfrister og offentlige kontaktopplysninger er ennå ikke fastsatt. Ikke oppgi personopplysninger eller hemmeligheter i demoens skjemaer.",
          ],
        },
      ],
      relatedTitle: "Relaterte sider",
      related: [
        { label: "Personvernerklæring", to: "/legal/privacy" },
        { label: "Vilkår for bruk", to: "/legal/terms" },
        { label: "Slik rapporterer du innhold", to: "/legal/report" },
      ],
      backHome: "Tilbake til startsiden",
    },
  },
  da: {
    terms: {
      title: "Servicevilkår",
      summary:
        "Dette er et arbejdsudkast til en mulig fremtidig TalkChat-tjeneste. Det er ikke en juridisk aftale, der er klar til brug.",
      draftNotice:
        "UDKAST — JURIDISK GENNEMGANG PÅKRÆVET: før en offentlig lancering skal operatørens identitet og kontaktoplysninger, gældende lov, ansvarsbestemmelser og endelige vilkår udfyldes og gennemgås af en kvalificeret fagperson.",
      reviewedAt: "Udkast — ingen ikrafttrædelsesdato.",
      sections: [
        {
          heading: "1. Projektets aktuelle status",
          paragraphs: [
            "TalkChat bruger Supabase Auth til konti, log ind og nulstilling af adgangskode. Beskeder, lagring af samtaler og moderering er ikke implementeret.",
            "Dette udkast oplister emner, der skal håndteres, hvis en tjeneste lanceres. Det betyder ikke, at en tjeneste, supportkanal eller modereringsproces er tilgængelig i dag.",
          ],
        },
        {
          heading: "2. Tiltænkt adgang og minimumsalder",
          paragraphs: [
            "Grænsefladen anmoder om fødselsdato og kontrollerer lokalt en minimumsalder på 13 år før tilmelding. Dette er ikke identitetskontrol, og ingen aldersregel håndhæves på serversiden.",
            "Minimumsalder, verifikationsmetode og regler for mindreårige skal gennemgås for hvert land, hvor tjenesten kan tilbydes, før lancering.",
          ],
        },
        {
          heading: "3. Forventet adfærd, hvis en tjeneste findes",
          paragraphs: [
            "Brugere af en fremtidig tjeneste skal overholde gældende lov og fællesskabsreglerne. Misbrug, forsøg på uautoriseret adgang, identitetstyveri og indhold, der krænker andres rettigheder, skal håndteres efter offentliggjorte regler og en fastlagt klageproces.",
            "Der er ingen reelle sanktioner, moderering eller klageproces i drift.",
          ],
        },
        {
          heading: "4. Indhold og rettigheder",
          paragraphs: [
            "Rettigheder til indhold, eventuelle begrænsede tilladelser, der er nødvendige for at drive en fremtidig tjeneste, samt regler for ulovligt eller anmeldt indhold skal præciseres i en endelig version. Dette udkast giver eller gør ikke krav på en licens til brugerindhold.",
          ],
        },
        {
          heading: "5. Tilgængelighed, ansvar og afslutning af tjenesten",
          paragraphs: [
            "Denne version indeholder ingen løfter om tilgængelighed, opbevaring af beskeder eller tjenestens kontinuitet. Ansvarsfraskrivelser, ansvarsbegrænsninger, opsigelse, eksport og sletning skal udarbejdes og gennemgås efter gældende lov før lancering.",
          ],
        },
        {
          heading: "6. Operatør, gældende lov og kontakt",
          paragraphs: [
            "Operatørens juridiske identitet, adresse, kontaktoplysninger, gældende lov og kompetente domstole er ikke angivet. Oplysningerne må ikke opfindes og skal udfyldes før offentliggørelse.",
          ],
        },
      ],
      relatedTitle: "Relaterede oplysninger",
      related: [
        { label: "Privatlivspolitik", to: "/legal/privacy" },
        { label: "Fællesskabsregler", to: "/legal/community" },
        { label: "Sikkerhedsprincipper", to: "/legal/security" },
      ],
      backHome: "Tilbage til forsiden",
    },
    privacy: {
      title: "Privatlivspolitik",
      summary:
        "Denne side beskriver TalkChats aktuelle behandling og de oplysninger, der stadig skal fastlægges før en offentlig lancering.",
      draftNotice:
        "UDKAST — JURIDISK GENNEMGANG PÅKRÆVET: dette er ikke juridisk rådgivning eller en garanti for overholdelse. Formål, retsgrundlag, dataansvarlige, modtagere, opbevaringsperioder og rettigheder skal fastlægges og gennemgås for relevante jurisdiktioner før lancering.",
      reviewedAt: "Udkast — ingen ikrafttrædelsesdato.",
      sections: [
        {
          heading: "1. Data, der bruges af den aktuelle version",
          paragraphs: [
            "Ved tilmelding og log ind sendes e-mailadressen og adgangskoden direkte til det konfigurerede Supabase-projekt til Supabase Auth. Visningsnavnet sendes som kontometadata. Fødselsdato og accept af vilkårene bruges kun i browseren og sendes ikke.",
            "Supabase SDK håndterer lagring af sessionen i browseren. Andre formularværdier findes midlertidigt i sidens hukommelse; browseren kan uafhængigt tilbyde at huske felter med sin autofyldningsfunktion.",
            "Tema- og sprogpræferencer gemmes separat i browserens lokale lager. Hvis lageret ikke er tilgængeligt, bevares de kun under det aktuelle besøg.",
          ],
        },
        {
          heading: "2. Eksterne tjenester og logfiler",
          paragraphs: [
            "Supabase behandler data, der er nødvendige for godkendelse. E-mailafsendelse afhænger af projektets konfiguration og SMTP-udbyder; denne konfiguration er ikke blevet verificeret. Ingen analysetjeneste eller TalkChat-beskedfunktion er implementeret. Hostingudbyderen og netværksinfrastrukturen kan også behandle forbindelsesdata eller føre logfiler.",
          ],
        },
        {
          heading: "3. Mulige data i en fremtidig tjeneste",
          paragraphs: [
            "Hvilke data en fremtidig tjeneste faktisk indsamler, er ikke fastlagt. Det kan omfatte kontooplysninger og indhold eller metadata, der er nødvendige for at drive tjenesten, men ingen udtømmende liste, formål eller retsgrundlag er besluttet endnu.",
            "Modtagere, databehandlere, mulige overførsler uden for den valgte region, opbevaringsperioder, regler for sikkerhedskopiering og sletteprocedurer mangler stadig at blive fastlagt. Der loves aktuelt ingen automatisk sletning eller bestemt opbevaringsperiode.",
          ],
        },
        {
          heading: "4. Rettigheder og anmodninger",
          paragraphs: [
            "Personers rettigheder, hvordan de udøves, svarfrister og den relevante myndighed afhænger blandt andet af personernes bopæl, tjenestens operatør og gældende lov. Disse oplysninger, den dataansvarlige og en gyldig kontaktmetode skal tilføjes før lancering.",
            "Denne demo har ingen kanal til anmodninger om indsigt, berigtigelse, sletning eller klager.",
          ],
        },
        {
          heading: "5. Privatliv og kryptering",
          paragraphs: [
            "At denne side findes, betyder ikke, at samtaler er end-to-end-krypterede. Denne version har ikke et beskedsystem eller E2EE-kryptering. Eventuel fremtidig kryptering og dens begrænsninger skal beskrives efter teknisk udformning og gennemgang.",
          ],
        },
      ],
      relatedTitle: "Relaterede sider",
      related: [
        { label: "Servicevilkår", to: "/legal/terms" },
        { label: "Sikkerhedsprincipper", to: "/legal/security" },
        { label: "Sådan rapporterer du indhold", to: "/legal/report" },
      ],
      backHome: "Tilbage til forsiden",
    },
    community: {
      title: "Fællesskabsregler",
      summary:
        "Foreslåede principper for samtaler, hvis TalkChat bliver en beskedtjeneste.",
      draftNotice:
        "UDKAST — TalkChat tilbyder i øjeblikket ikke beskeder eller moderering. Disse retningslinjer håndhæves ikke af et operationelt system.",
      reviewedAt: "Foreslåede principper — ingen ikrafttrædelsesdato.",
      sections: [
        {
          heading: "Respekt og sikkerhed",
          paragraphs: [
            "Behandl andre med respekt. Trusler, målrettet chikane, had, intimidering og opfordring til vold hører ikke hjemme i et trygt fællesskab.",
            "Del ikke en anden persons private oplysninger uden tilladelse. Udgiv dig ikke for at være andre, og forsøg ikke at få adgang til en konto eller enhed uden tilladelse.",
          ],
        },
        {
          heading: "Indhold og hvervning",
          paragraphs: [
            "Send ikke ulovligt indhold, svindel, malware, spam eller gentagne uønskede hvervebeskeder. Respekter ophavsret og andre gældende rettigheder.",
            "Disse principper er et redaktionelt forslag. Definitioner af forbudt indhold, undtagelser, mulige foranstaltninger og klageveje skal fastlægges før lancering.",
          ],
        },
        {
          heading: "Mindreårige og rapportering",
          paragraphs: [
            "Gå ikke upassende efter mindreårige, og del ikke billeder eller oplysninger, der kan udsætte dem for fare. Beskyttelsesregler, behandling af rapporter og eskalering skal udformes med passende sikkerhedsforanstaltninger før en offentlig lancering.",
            "Demoen har ingen rapporterings- eller modereringsfunktion. Se den særlige side for denne begrænsning.",
          ],
        },
        {
          heading: "Håndhævelse",
          paragraphs: [
            "Denne version har intet modereringsteam, ingen blokeringsfunktion og ingen proces for sanktioner og klager. Stol ikke på disse retningslinjer som en reel indgriben.",
          ],
        },
      ],
      relatedTitle: "Relaterede sider",
      related: [
        { label: "Sådan rapporterer du indhold", to: "/legal/report" },
        { label: "Sikkerhedsprincipper", to: "/legal/security" },
        { label: "Privatlivspolitik", to: "/legal/privacy" },
      ],
      backHome: "Tilbage til forsiden",
    },
    report: {
      title: "Rapportér indhold eller en konto",
      summary:
        "Oplysningerne nedenfor beskriver en mulig fremtidig proces; det er ikke en rapporteringsformular.",
      draftNotice:
        "DER SENDES INGEN RAPPORT: TalkChat har endnu ikke beskeder, en rapportknap, et gennemgangsteam eller en offentliggjort kontaktadresse til rapportering.",
      reviewedAt: "Prototypeoplysninger — gennemgå før lancering.",
      sections: [
        {
          heading: "Rapportering er endnu ikke tilgængelig",
          paragraphs: [
            "Denne side sender ingen rapport og indsamler ikke beviser. Brug ikke tilmeldings- eller loginformularerne til at rapportere et problem; de bruges kun til kontogodkendelse.",
            "Der er ingen e-mailadresse eller kontaktoplysninger til rapportering, fordi der ikke er fastlagt en operationel kanal. Denne side kan ikke modtage eller behandle en anmodning.",
          ],
        },
        {
          heading: "Oplysninger, du kan forberede til en fremtidig rapport",
          paragraphs: [
            "Hvis en tjeneste lanceres med en særlig funktion, kan det være nyttigt at beskrive det relevante indhold eller den relevante konto, hvor det vises, årsagen til rapporten og det omtrentlige tidspunkt. Del kun oplysninger, der er strengt nødvendige, og undgå at offentliggøre personoplysninger eller følsomt indhold.",
          ],
        },
        {
          heading: "Hastesituationer",
          paragraphs: [
            "TalkChat overvåger ikke denne side og kan ikke reagere på nødsituationer. Ved umiddelbar fare skal du kontakte alarmcentralen eller de kompetente myndigheder, hvor du bor.",
          ],
        },
        {
          heading: "Det, der skal fastlægges før lancering",
          bullets: [
            "En operationel og tilgængelig rapporteringskanal.",
            "Kategorier, vejledende tidsrammer, håndteringsregler og oplysninger, der opbevares.",
            "Beskyttelse af rapportører, meddelelser og en klageproces.",
            "Operatørens ansvar og regler i relevante jurisdiktioner.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Relaterede sider",
      related: [
        { label: "Fællesskabsregler", to: "/legal/community" },
        { label: "Privatlivspolitik", to: "/legal/privacy" },
      ],
      backHome: "Tilbage til forsiden",
    },
    security: {
      title: "Sikkerhedsprincipper",
      summary:
        "Denne side skelner mellem demoens begrænsninger og mål, der skal udformes før en reel tjeneste.",
      draftNotice:
        "INGEN SIKKERHEDSGARANTI: principperne nedenfor er designmål. De beskriver ikke beskyttelse, der allerede er implementeret eller revideret.",
      reviewedAt: "Prototypeoplysninger — gennemgå før lancering.",
      sections: [
        {
          heading: "Projektets aktuelle status",
          paragraphs: [
            "Supabase Auth leverer kontoregistrering, log ind, sessionshåndtering og nulstilling af adgangskode. Denne frontend implementerer ikke beskeder, end-to-end-kryptering, sikre sikkerhedskopier, automatisk sletning, overvågning, serverbaserede begrænsninger på antal forsøg eller en proces for hændelseshåndtering.",
            "Frontendens rutebeskyttelse er ikke en autorisationsgrænse og erstatter ikke kontroller på serversiden eller Supabase RLS-politikker. Der er ikke implementeret besked- eller profiltabeller.",
          ],
        },
        {
          heading: "Foreslåede mål for en fremtidig version",
          bullets: [
            "Begræns indsamlede data, og begræns adgangen til det nødvendige.",
            "Beskyt konti og sessioner, verificer tilladelser på serversiden, og test adgangsregler.",
            "Brug krypterede forbindelser under overførsel, og hold hemmeligheder ude af kode, der leveres til browseren.",
            "Vurder en grundigt gennemgået E2EE-protokol, før der fremsættes påstande om end-to-end-kryptering.",
            "Fastlæg sikkerhedskopier, gendannelsesnøgler, opbevaring og gendannelsestest, før de annonceres.",
            "Planlæg opdateringer, gennemgange, minimerede logfiler og håndtering af sårbarheder.",
          ],
          paragraphs: [],
        },
        {
          heading: "Begrænsninger og sikkerhedskontakt",
          paragraphs: [
            "Disse mål er hverken en certificering eller en garanti for absolut beskyttelse. Den sikkerhedsansvarlige, kanalen til offentliggørelse af sårbarheder, svartider og offentlige kontaktoplysninger er endnu ikke fastlagt. Indtast ikke personoplysninger eller hemmeligheder i demoversionens formularer.",
          ],
        },
      ],
      relatedTitle: "Relaterede sider",
      related: [
        { label: "Privatlivspolitik", to: "/legal/privacy" },
        { label: "Servicevilkår", to: "/legal/terms" },
        { label: "Sådan rapporterer du indhold", to: "/legal/report" },
      ],
      backHome: "Tilbage til forsiden",
    },
  },
  fi: {
    terms: {
      title: "Käyttöehdot",
      summary:
        "Tämä on työluonnos mahdolliselle tulevalle TalkChat-palvelulle. Se ei ole käyttövalmis oikeudellinen sopimus.",
      draftNotice:
        "LUONNOS — EDELLYTTÄÄ OIKEUDELLISTA TARKASTUSTA: ennen julkista lanseerausta ylläpitäjän henkilöllisyys ja yhteystiedot, sovellettava laki, vastuun ehdot ja lopulliset käyttöehdot on täydennettävä ja annettava pätevän ammattilaisen tarkistettavaksi.",
      reviewedAt: "Luonnos — ei voimaantulopäivää.",
      sections: [
        {
          heading: "1. Hankkeen nykytila",
          paragraphs: [
            "TalkChat käyttää Supabase Authia tileihin, kirjautumiseen ja salasanan palautukseen. Viestitoimintoa, keskustelujen tallennusta ja moderointia ei ole toteutettu.",
            "Tässä luonnoksessa luetellaan käsiteltävät aiheet, jos palvelu lanseerataan. Se ei tarkoita, että palvelu, tukikanava tai moderointiprosessi olisi tällä hetkellä käytettävissä.",
          ],
        },
        {
          heading: "2. Suunniteltu käyttöoikeus ja vähimmäisikä",
          paragraphs: [
            "Käyttöliittymä pyytää syntymäaikaa ja tarkistaa paikallisesti 13 vuoden vähimmäisiän ennen rekisteröitymistä. Tämä ei ole henkilöllisyyden varmentamista, eikä palvelinpuolella valvota ikärajaa.",
            "Vähimmäisikä, varmennusmenetelmä ja alaikäisiä koskevat säännöt on tarkistettava jokaisen maan osalta, jossa palvelua saatetaan tarjota, ennen lanseerausta.",
          ],
        },
        {
          heading: "3. Odotettu toiminta, jos palvelu on käytössä",
          paragraphs: [
            "Tulevan palvelun käyttäjien on noudatettava sovellettavaa lakia ja yhteisön sääntöjä. Väärinkäytöksiin, luvattoman käytön yrityksiin, toisena esiintymiseen ja muiden oikeuksia loukkaavaan sisältöön on puututtava julkaistujen sääntöjen ja määritellyn muutoksenhakuprosessin mukaisesti.",
            "Käytössä ei ole todellisia seuraamuksia, moderointia eikä muutoksenhakuprosessia.",
          ],
        },
        {
          heading: "4. Sisältö ja oikeudet",
          paragraphs: [
            "Sisältöön liittyvät oikeudet, tulevan palvelun toiminnassa tarvittavat rajatut käyttöoikeudet sekä laittoman tai ilmoitetun sisällön säännöt on määriteltävä lopullisessa versiossa. Tämä luonnos ei myönnä eikä vaadi lisenssiä käyttäjien sisältöön.",
          ],
        },
        {
          heading: "5. Saatavuus, vastuu ja palvelun päättyminen",
          paragraphs: [
            "Tässä versiossa ei anneta lupauksia saatavuudesta, viestien säilyttämisestä tai palvelun jatkuvuudesta. Vastuuvapaudet, vastuunrajoitukset, irtisanomista, vientiä ja poistamista koskevat säännöt on laadittava ja tarkistettava sovellettavan lain perusteella ennen lanseerausta.",
          ],
        },
        {
          heading: "6. Ylläpitäjä, sovellettava laki ja yhteystiedot",
          paragraphs: [
            "Ylläpitäjän oikeudellista henkilöllisyyttä, osoitetta, yhteystietoja, sovellettavaa lakia ja toimivaltaisia tuomioistuimia ei ole ilmoitettu. Niitä ei saa keksiä, ja tiedot on täydennettävä ennen julkaisua.",
          ],
        },
      ],
      relatedTitle: "Aiheeseen liittyvät tiedot",
      related: [
        { label: "Tietosuojakäytäntö", to: "/legal/privacy" },
        { label: "Yhteisön säännöt", to: "/legal/community" },
        { label: "Tietoturvaperiaatteet", to: "/legal/security" },
      ],
      backHome: "Takaisin etusivulle",
    },
    privacy: {
      title: "Tietosuojakäytäntö",
      summary:
        "Tällä sivulla kuvataan TalkChatin nykyistä tietojenkäsittelyä ja tietoja, jotka on vielä määriteltävä ennen julkista lanseerausta.",
      draftNotice:
        "LUONNOS — EDELLYTTÄÄ OIKEUDELLISTA TARKASTUSTA: tämä ei ole oikeudellista neuvontaa eikä vaatimustenmukaisuuden tae. Tarkoitukset, oikeusperusteet, rekisterinpitäjät, vastaanottajat, säilytysajat ja oikeudet on määriteltävä ja tarkistettava asiaankuuluvilla lainkäyttöalueilla ennen lanseerausta.",
      reviewedAt: "Luonnos — ei voimaantulopäivää.",
      sections: [
        {
          heading: "1. Nykyisen version käyttämät tiedot",
          paragraphs: [
            "Rekisteröitymisen ja kirjautumisen yhteydessä sähköpostiosoite ja salasana lähetetään suoraan määritettyyn Supabase-projektiin Supabase Authia varten. Näyttönimi lähetetään tilin metatietona. Syntymäaikaa ja ehtojen hyväksymistä käytetään vain selaimessa eikä niitä lähetetä.",
            "Supabase SDK hallinnoi istunnon pysyvyyttä selaimessa. Muut lomakearvot säilyvät väliaikaisesti sivun muistissa; selaimesi voi erikseen tarjota kenttien tallentamista automaattisen täytön avulla.",
            "Teema- ja kieliasetukset tallennetaan erikseen selaimen paikalliseen tallennustilaan. Jos tallennustila ei ole käytettävissä, asetukset säilyvät vain nykyisen käynnin ajan.",
          ],
        },
        {
          heading: "2. Ulkoiset palvelut ja lokit",
          paragraphs: [
            "Supabase käsittelee tunnistautumiseen tarvittavia tietoja. Sähköpostien lähettäminen riippuu projektin asetuksista ja SMTP-palveluntarjoajasta; näitä asetuksia ei ole vahvistettu. Analytiikkapalvelua tai TalkChatin viestitoimintoa ei ole toteutettu. Hosting-palveluntarjoaja ja verkkoinfrastruktuuri voivat myös käsitellä yhteystietoja tai pitää lokitietoja.",
          ],
        },
        {
          heading: "3. Tulevan palvelun mahdollisesti käyttämät tiedot",
          paragraphs: [
            "Tulevan palvelun tosiasiallisesti keräämiä tietoja ei ole vielä määritelty. Niihin voi sisältyä tilitietoja sekä palvelun toiminnan kannalta tarpeellista sisältöä tai metatietoja, mutta kattavaa luetteloa, tarkoitusta tai oikeusperustetta ei ole vielä päätetty.",
            "Vastaanottajat, henkilötietojen käsittelijät, mahdolliset siirrot valitun alueen ulkopuolelle, säilytysajat, varmuuskopiointisäännöt ja poistomenettelyt on vielä määriteltävä. Automaattista poistamista tai tiettyä säilytysaikaa ei tällä hetkellä luvata.",
          ],
        },
        {
          heading: "4. Oikeudet ja pyynnöt",
          paragraphs: [
            "Henkilöiden oikeudet, niiden käyttäminen, vastausajat ja toimivaltainen viranomainen riippuvat muun muassa henkilöiden asuinpaikasta, palvelun ylläpitäjästä ja sovellettavasta laista. Nämä tiedot, rekisterinpitäjä ja toimiva yhteydenottotapa on lisättävä ennen lanseerausta.",
            "Tässä demossa ei ole kanavaa tarkastus-, oikaisu-, poisto- tai valituspyyntöjä varten.",
          ],
        },
        {
          heading: "5. Yksityisyys ja salaus",
          paragraphs: [
            "Tämän sivun olemassaolo ei tarkoita, että keskustelut olisi salattu päästä päähän. Tässä versiossa ei ole viestijärjestelmää eikä E2EE-salausta. Mahdollinen tuleva salaus ja sen rajoitukset on kuvattava teknisen suunnittelun ja tarkastuksen jälkeen.",
          ],
        },
      ],
      relatedTitle: "Aiheeseen liittyvät sivut",
      related: [
        { label: "Käyttöehdot", to: "/legal/terms" },
        { label: "Tietoturvaperiaatteet", to: "/legal/security" },
        { label: "Näin ilmoitat sisällöstä", to: "/legal/report" },
      ],
      backHome: "Takaisin etusivulle",
    },
    community: {
      title: "Yhteisön säännöt",
      summary:
        "Ehdotettuja periaatteita keskusteluille, jos TalkChatista tulee viestipalvelu.",
      draftNotice:
        "LUONNOS — TalkChat ei tällä hetkellä tarjoa viestejä tai moderointia. Toimiva järjestelmä ei valvo näitä sääntöjä.",
      reviewedAt: "Ehdotetut periaatteet — ei voimaantulopäivää.",
      sections: [
        {
          heading: "Kunnioitus ja turvallisuus",
          paragraphs: [
            "Kohtele muita kunnioittavasti. Uhkat, kohdennettu häirintä, viha, pelottelu ja väkivaltaan kannustaminen eivät kuulu turvalliseen yhteisöön.",
            "Älä jaa toisen henkilön yksityisiä tietoja ilman lupaa. Älä esiinny toisena henkilönä äläkä yritä käyttää tiliä tai laitetta ilman lupaa.",
          ],
        },
        {
          heading: "Sisältö ja houkuttelu",
          paragraphs: [
            "Älä lähetä laitonta sisältöä, petoksia, haittaohjelmia, roskapostia tai toistuvia ei-toivottuja houkutteluviestejä. Kunnioita tekijänoikeuksia ja muita sovellettavia oikeuksia.",
            "Nämä periaatteet ovat toimituksellinen ehdotus. Kielletyn sisällön määritelmät, poikkeukset, mahdolliset toimenpiteet ja muutoksenhakukeinot on määriteltävä ennen lanseerausta.",
          ],
        },
        {
          heading: "Alaikäiset ja ilmoitukset",
          paragraphs: [
            "Älä kohdista asiatonta toimintaa alaikäisiin äläkä jaa kuvia tai tietoja, jotka voivat vaarantaa heidät. Suojelusäännöt, ilmoitusten käsittely ja eskalointi on suunniteltava asianmukaisin suojatoimin ennen julkista lanseerausta.",
            "Demossa ei ole ilmoitus- tai moderointitoimintoa. Katso erilliseltä sivulta lisätietoja tästä rajoituksesta.",
          ],
        },
        {
          heading: "Täytäntöönpano",
          paragraphs: [
            "Tässä versiossa ei ole moderointitiimiä, estotoimintoa eikä seuraamus- tai muutoksenhakuprosessia. Älä luota näihin sääntöihin todellisena puuttumisena.",
          ],
        },
      ],
      relatedTitle: "Aiheeseen liittyvät sivut",
      related: [
        { label: "Näin ilmoitat sisällöstä", to: "/legal/report" },
        { label: "Tietoturvaperiaatteet", to: "/legal/security" },
        { label: "Tietosuojakäytäntö", to: "/legal/privacy" },
      ],
      backHome: "Takaisin etusivulle",
    },
    report: {
      title: "Ilmoita sisällöstä tai tilistä",
      summary:
        "Alla olevat tiedot kuvaavat mahdollista tulevaa menettelyä; tämä ei ole ilmoituslomake.",
      draftNotice:
        "ILMOITUSTA EI LÄHETETÄ: TalkChatissa ei vielä ole viestejä, ilmoituspainiketta, tarkastustiimiä tai julkaistua ilmoitusten yhteysosoitetta.",
      reviewedAt: "Prototyyppitiedot — tarkistettava ennen lanseerausta.",
      sections: [
        {
          heading: "Ilmoitustoiminto ei ole vielä käytettävissä",
          paragraphs: [
            "Tämä sivu ei lähetä ilmoitusta eikä kerää todisteita. Älä käytä rekisteröitymis- tai kirjautumislomakkeita ongelman ilmoittamiseen; ne on tarkoitettu vain tilin tunnistautumiseen.",
            "Ilmoituksia varten ei ole lueteltu sähköpostiosoitetta tai yhteystietoja, koska toimivaa kanavaa ei ole määritelty. Tämä sivu ei voi vastaanottaa tai käsitellä pyyntöä.",
          ],
        },
        {
          heading: "Tulevaa ilmoitusta varten valmisteltavat tiedot",
          paragraphs: [
            "Jos palvelu lanseerataan erillisellä toiminnolla, voi olla hyödyllistä kuvata kyseinen sisältö tai tili, missä se näkyy, ilmoituksen syy ja likimääräinen ajankohta. Jaa vain ehdottoman tarpeellisia tietoja ja vältä henkilötietojen tai arkaluonteisen sisällön julkista levittämistä.",
          ],
        },
        {
          heading: "Kiireelliset tilanteet",
          paragraphs: [
            "TalkChat ei valvo tätä sivua eikä voi puuttua hätätilanteisiin. Jos vaara on välitön, ota yhteyttä hätäkeskukseen tai asuinpaikkasi toimivaltaisiin viranomaisiin.",
          ],
        },
        {
          heading: "Ennen lanseerausta määriteltävät asiat",
          bullets: [
            "Toimiva ja helposti käytettävä ilmoituskanava.",
            "Luokat, ohjeelliset aikataulut, käsittelysäännöt ja säilytettävät tiedot.",
            "Ilmoittajien suojaaminen, ilmoitukset ja muutoksenhakuprosessi.",
            "Ylläpitäjän vastuut ja asiaankuuluvien lainkäyttöalueiden säännöt.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Aiheeseen liittyvät sivut",
      related: [
        { label: "Yhteisön säännöt", to: "/legal/community" },
        { label: "Tietosuojakäytäntö", to: "/legal/privacy" },
      ],
      backHome: "Takaisin etusivulle",
    },
    security: {
      title: "Tietoturvaperiaatteet",
      summary:
        "Tällä sivulla erotetaan demon rajoitukset tavoitteista, jotka olisi suunniteltava ennen todellista palvelua.",
      draftNotice:
        "EI TIETOTURVATAKUUTA: alla olevat periaatteet ovat suunnittelutavoitteita. Ne eivät kuvaa jo toteutettuja tai auditoituja suojauksia.",
      reviewedAt: "Prototyyppitiedot — tarkistettava ennen lanseerausta.",
      sections: [
        {
          heading: "Hankkeen nykytila",
          paragraphs: [
            "Supabase Auth tarjoaa tilin rekisteröinnin, kirjautumisen, istunnonhallinnan ja salasanan palautuksen. Tämä frontend-versio ei toteuta viestintää, päästä päähän -salausta, turvallisia varmuuskopioita, automaattista poistamista, valvontaa, palvelinpuolisia yritysrajoja tai poikkeamien käsittelyprosessia.",
            "Frontendin reittisuoja ei ole käyttöoikeusraja eikä korvaa palvelinpuolisia tarkistuksia tai Supabase RLS -käytäntöjä. Viesti- tai profiilitauluja ei ole toteutettu.",
          ],
        },
        {
          heading: "Ehdotetut tavoitteet tulevalle versiolle",
          bullets: [
            "Minimoi kerättävät tiedot ja rajaa pääsy vain tarpeellisiin tietoihin.",
            "Suojaa tilit ja istunnot, varmista käyttöoikeudet palvelinpuolella ja testaa käyttöoikeussäännöt.",
            "Käytä salattuja yhteyksiä tiedonsiirrossa ja pidä salaisuudet poissa selaimelle toimitettavasta koodista.",
            "Arvioi perusteellisesti tarkistettu E2EE-protokolla ennen päästä päähän -salausta koskevia väitteitä.",
            "Määrittele varmuuskopiot, palautusavaimet, säilytys ja palautustestit ennen niiden ilmoittamista.",
            "Suunnittele päivitykset, tarkastukset, minimoidut lokit ja haavoittuvuuksiin reagointi.",
          ],
          paragraphs: [],
        },
        {
          heading: "Rajoitukset ja tietoturvayhteys",
          paragraphs: [
            "Nämä tavoitteet eivät ole sertifiointi eivätkä tae täydellisestä suojauksesta. Tietoturvavastaavaa, haavoittuvuuksien ilmoituskanavaa, vastausaikoja ja julkisia yhteystietoja ei ole vielä määritelty. Älä lisää demolomakkeisiin henkilötietoja tai salaisuuksia.",
          ],
        },
      ],
      relatedTitle: "Aiheeseen liittyvät sivut",
      related: [
        { label: "Tietosuojakäytäntö", to: "/legal/privacy" },
        { label: "Käyttöehdot", to: "/legal/terms" },
        { label: "Näin ilmoitat sisällöstä", to: "/legal/report" },
      ],
      backHome: "Takaisin etusivulle",
    },
  },
  el: {
    terms: {
      title: "Όροι χρήσης",
      summary:
        "Αυτό είναι ένα προσχέδιο εργασίας για μια πιθανή μελλοντική υπηρεσία TalkChat. Δεν αποτελεί έτοιμη προς χρήση νομική συμφωνία.",
      draftNotice:
        "ΠΡΟΣΧΕΔΙΟ — ΑΠΑΙΤΕΙΤΑΙ ΝΟΜΙΚΟΣ ΕΛΕΓΧΟΣ: πριν από οποιαδήποτε δημόσια κυκλοφορία, πρέπει να συμπληρωθούν η ταυτότητα και τα στοιχεία επικοινωνίας του φορέα εκμετάλλευσης, το εφαρμοστέο δίκαιο, οι όροι ευθύνης και οι τελικοί όροι, και να ελεγχθούν από κατάλληλα καταρτισμένο επαγγελματία.",
      reviewedAt: "Προσχέδιο — δεν υπάρχει ημερομηνία έναρξης ισχύος.",
      sections: [
        {
          heading: "1. Τρέχουσα κατάσταση του έργου",
          paragraphs: [
            "Το TalkChat χρησιμοποιεί το Supabase Auth για λογαριασμούς, σύνδεση και ανάκτηση κωδικού πρόσβασης. Η ανταλλαγή μηνυμάτων, η αποθήκευση συνομιλιών και η εποπτεία δεν έχουν υλοποιηθεί.",
            "Το προσχέδιο αυτό παραθέτει θέματα που πρέπει να αντιμετωπιστούν αν ξεκινήσει η υπηρεσία. Δεν σημαίνει ότι σήμερα διατίθεται υπηρεσία, κανάλι υποστήριξης ή διαδικασία εποπτείας.",
          ],
        },
        {
          heading: "2. Προβλεπόμενη πρόσβαση και ελάχιστη ηλικία",
          paragraphs: [
            "Η διεπαφή ζητά ημερομηνία γέννησης και ελέγχει τοπικά αν ο χρήστης είναι τουλάχιστον 13 ετών πριν από την εγγραφή. Αυτό δεν αποτελεί επαλήθευση ταυτότητας και δεν εφαρμόζεται κανόνας ηλικίας από την πλευρά του διακομιστή.",
            "Η ελάχιστη ηλικία, η μέθοδος επαλήθευσης και οι κανόνες για ανηλίκους πρέπει να ελεγχθούν για κάθε χώρα όπου ενδέχεται να προσφερθεί η υπηρεσία, πριν από την κυκλοφορία.",
          ],
        },
        {
          heading: "3. Αναμενόμενη συμπεριφορά αν υπάρξει υπηρεσία",
          paragraphs: [
            "Οι χρήστες μιας μελλοντικής υπηρεσίας θα πρέπει να συμμορφώνονται με την ισχύουσα νομοθεσία και τους κανόνες της κοινότητας. Η κατάχρηση, οι απόπειρες μη εξουσιοδοτημένης πρόσβασης, η πλαστοπροσωπία και το περιεχόμενο που παραβιάζει δικαιώματα άλλων πρέπει να αντιμετωπίζονται βάσει δημοσιευμένων κανόνων και καθορισμένης διαδικασίας προσφυγής.",
            "Δεν εφαρμόζονται στην πράξη κυρώσεις, εποπτεία ή διαδικασία προσφυγής.",
          ],
        },
        {
          heading: "4. Περιεχόμενο και δικαιώματα",
          paragraphs: [
            "Τα δικαιώματα επί του περιεχομένου, οι τυχόν περιορισμένες άδειες που απαιτούνται για τη λειτουργία μελλοντικής υπηρεσίας και οι κανόνες για παράνομο περιεχόμενο ή περιεχόμενο που έχει αναφερθεί πρέπει να προσδιοριστούν σε τελική έκδοση. Το προσχέδιο αυτό ούτε παραχωρεί ούτε διεκδικεί άδεια χρήσης περιεχομένου χρηστών.",
          ],
        },
        {
          heading: "5. Διαθεσιμότητα, ευθύνη και λήξη της υπηρεσίας",
          paragraphs: [
            "Η έκδοση αυτή δεν δεσμεύεται ως προς τη διαθεσιμότητα, τη διατήρηση μηνυμάτων ή τη συνέχεια της υπηρεσίας. Οι αποποιήσεις, τα όρια ευθύνης, οι κανόνες καταγγελίας, εξαγωγής και διαγραφής πρέπει να συνταχθούν και να ελεγχθούν βάσει του εφαρμοστέου δικαίου πριν από την κυκλοφορία.",
          ],
        },
        {
          heading: "6. Φορέας εκμετάλλευσης, εφαρμοστέο δίκαιο και επικοινωνία",
          paragraphs: [
            "Η νομική ταυτότητα, η διεύθυνση και τα στοιχεία επικοινωνίας του φορέα εκμετάλλευσης, το εφαρμοστέο δίκαιο και τα αρμόδια δικαστήρια δεν παρέχονται. Δεν πρέπει να επινοηθούν και πρέπει να συμπληρωθούν πριν από τη δημοσίευση.",
          ],
        },
      ],
      relatedTitle: "Σχετικές πληροφορίες",
      related: [
        { label: "Πολιτική απορρήτου", to: "/legal/privacy" },
        { label: "Κανόνες κοινότητας", to: "/legal/community" },
        { label: "Αρχές ασφάλειας", to: "/legal/security" },
      ],
      backHome: "Επιστροφή στην αρχική",
    },
    privacy: {
      title: "Πολιτική απορρήτου",
      summary:
        "Αυτή η σελίδα περιγράφει την τρέχουσα επεξεργασία δεδομένων από το TalkChat και τις πληροφορίες που πρέπει ακόμη να καθοριστούν πριν από δημόσια κυκλοφορία.",
      draftNotice:
        "ΠΡΟΣΧΕΔΙΟ — ΑΠΑΙΤΕΙΤΑΙ ΝΟΜΙΚΟΣ ΕΛΕΓΧΟΣ: δεν αποτελεί νομική συμβουλή ή εγγύηση συμμόρφωσης. Οι σκοποί, οι νομικές βάσεις, οι υπεύθυνοι επεξεργασίας, οι αποδέκτες, οι περίοδοι διατήρησης και τα δικαιώματα πρέπει να προσδιοριστούν και να ελεγχθούν στις σχετικές δικαιοδοσίες πριν από την κυκλοφορία.",
      reviewedAt: "Προσχέδιο — δεν υπάρχει ημερομηνία έναρξης ισχύος.",
      sections: [
        {
          heading: "1. Δεδομένα που χρησιμοποιεί η τρέχουσα έκδοση",
          paragraphs: [
            "Κατά την εγγραφή και τη σύνδεση, η διεύθυνση email και ο κωδικός πρόσβασης αποστέλλονται απευθείας στο διαμορφωμένο έργο Supabase για το Supabase Auth. Το εμφανιζόμενο όνομα αποστέλλεται ως μεταδεδομένο λογαριασμού. Η ημερομηνία γέννησης και η αποδοχή των όρων χρησιμοποιούνται μόνο στο πρόγραμμα περιήγησης και δεν αποστέλλονται.",
            "Το Supabase SDK διαχειρίζεται τη διατήρηση της συνεδρίας στο πρόγραμμα περιήγησης. Άλλες τιμές φορμών παραμένουν προσωρινά στη μνήμη της σελίδας· το πρόγραμμα περιήγησης ενδέχεται ανεξάρτητα να προτείνει την απομνημόνευση πεδίων μέσω της αυτόματης συμπλήρωσης.",
            "Οι προτιμήσεις θέματος και γλώσσας αποθηκεύονται χωριστά στον τοπικό χώρο αποθήκευσης του προγράμματος περιήγησης. Αν ο χώρος αποθήκευσης δεν είναι διαθέσιμος, διατηρούνται μόνο για την τρέχουσα επίσκεψη.",
          ],
        },
        {
          heading: "2. Εξωτερικές υπηρεσίες και αρχεία καταγραφής",
          paragraphs: [
            "Το Supabase επεξεργάζεται δεδομένα που απαιτούνται για την ταυτοποίηση. Η αποστολή email εξαρτάται από τη διαμόρφωση του έργου και τον πάροχο SMTP· αυτή η διαμόρφωση δεν έχει επαληθευτεί. Δεν έχει υλοποιηθεί υπηρεσία αναλυτικών στοιχείων ή λειτουργία ανταλλαγής μηνυμάτων TalkChat. Ο πάροχος φιλοξενίας και η δικτυακή υποδομή ενδέχεται επίσης να επεξεργάζονται δεδομένα σύνδεσης ή να τηρούν αρχεία καταγραφής.",
          ],
        },
        {
          heading: "3. Πιθανά δεδομένα σε μελλοντική υπηρεσία",
          paragraphs: [
            "Δεν έχουν καθοριστεί τα δεδομένα που θα συλλέγει πραγματικά μια μελλοντική υπηρεσία. Ενδέχεται να περιλαμβάνουν πληροφορίες λογαριασμού και περιεχόμενο ή μεταδεδομένα που απαιτούνται για τη λειτουργία της, αλλά δεν έχει ακόμη αποφασιστεί εξαντλητικός κατάλογος, σκοπός ή νομική βάση.",
            "Οι αποδέκτες, οι εκτελούντες την επεξεργασία, οι πιθανές διαβιβάσεις εκτός της επιλεγμένης περιοχής, οι περίοδοι διατήρησης, οι κανόνες δημιουργίας αντιγράφων ασφαλείας και οι διαδικασίες διαγραφής πρέπει ακόμη να καθοριστούν. Δεν παρέχεται επί του παρόντος υπόσχεση αυτόματης διαγραφής ή συγκεκριμένης περιόδου διατήρησης.",
          ],
        },
        {
          heading: "4. Δικαιώματα και αιτήματα",
          paragraphs: [
            "Τα δικαιώματα των προσώπων, ο τρόπος άσκησής τους, οι προθεσμίες απάντησης και η αρμόδια αρχή εξαρτώνται, μεταξύ άλλων, από τον τόπο διαμονής τους, τον φορέα εκμετάλλευσης της υπηρεσίας και το εφαρμοστέο δίκαιο. Αυτά τα στοιχεία, ο υπεύθυνος επεξεργασίας και ένας έγκυρος τρόπος επικοινωνίας πρέπει να προστεθούν πριν από την κυκλοφορία.",
            "Αυτή η επίδειξη δεν διαθέτει κανάλι για αιτήματα πρόσβασης, διόρθωσης, διαγραφής ή παραπόνων.",
          ],
        },
        {
          heading: "5. Απόρρητο και κρυπτογράφηση",
          paragraphs: [
            "Η ύπαρξη αυτής της σελίδας δεν σημαίνει ότι οι συνομιλίες είναι κρυπτογραφημένες από άκρο σε άκρο. Αυτή η έκδοση δεν διαθέτει σύστημα ανταλλαγής μηνυμάτων ή κρυπτογράφηση E2EE. Κάθε μελλοντική κρυπτογράφηση και οι περιορισμοί της πρέπει να περιγραφούν μετά τον τεχνικό σχεδιασμό και τον έλεγχο.",
          ],
        },
      ],
      relatedTitle: "Σχετικές σελίδες",
      related: [
        { label: "Όροι χρήσης", to: "/legal/terms" },
        { label: "Αρχές ασφάλειας", to: "/legal/security" },
        { label: "Πώς να αναφέρετε περιεχόμενο", to: "/legal/report" },
      ],
      backHome: "Επιστροφή στην αρχική",
    },
    community: {
      title: "Κανόνες κοινότητας",
      summary:
        "Προτεινόμενες αρχές για συνομιλίες, αν το TalkChat γίνει υπηρεσία ανταλλαγής μηνυμάτων.",
      draftNotice:
        "ΠΡΟΣΧΕΔΙΟ — Το TalkChat δεν παρέχει προς το παρόν ανταλλαγή μηνυμάτων ή εποπτεία. Οι κανόνες αυτοί δεν επιβάλλονται από λειτουργικό σύστημα.",
      reviewedAt:
        "Προτεινόμενες αρχές — δεν υπάρχει ημερομηνία έναρξης ισχύος.",
      sections: [
        {
          heading: "Σεβασμός και ασφάλεια",
          paragraphs: [
            "Να φέρεστε στους άλλους με σεβασμό. Οι απειλές, η στοχευμένη παρενόχληση, το μίσος, ο εκφοβισμός και η ενθάρρυνση της βίας δεν έχουν θέση σε μια ασφαλή κοινότητα.",
            "Μην κοινοποιείτε ιδιωτικές πληροφορίες άλλου προσώπου χωρίς άδεια. Μην προσποιείστε ότι είστε κάποιος άλλος και μην επιχειρείτε πρόσβαση σε λογαριασμό ή συσκευή χωρίς εξουσιοδότηση.",
          ],
        },
        {
          heading: "Περιεχόμενο και προσέλκυση",
          paragraphs: [
            "Μην αποστέλλετε παράνομο περιεχόμενο, απάτες, κακόβουλο λογισμικό, ανεπιθύμητα μηνύματα ή επαναλαμβανόμενες ανεπιθύμητες προωθητικές προσεγγίσεις. Σεβαστείτε τα πνευματικά δικαιώματα και άλλα εφαρμοστέα δικαιώματα.",
            "Οι αρχές αυτές αποτελούν συντακτική πρόταση. Οι ορισμοί απαγορευμένου περιεχομένου, οι εξαιρέσεις, τα πιθανά μέτρα και οι διαδικασίες προσφυγής πρέπει να καθοριστούν πριν από την κυκλοφορία.",
          ],
        },
        {
          heading: "Ανήλικοι και αναφορές",
          paragraphs: [
            "Μην στοχοποιείτε ανηλίκους με ακατάλληλο τρόπο και μην κοινοποιείτε εικόνες ή πληροφορίες που ενδέχεται να τους θέσουν σε κίνδυνο. Οι κανόνες προστασίας, ο χειρισμός αναφορών και η κλιμάκωση πρέπει να σχεδιαστούν με κατάλληλες εγγυήσεις πριν από οποιαδήποτε δημόσια κυκλοφορία.",
            "Η επίδειξη δεν διαθέτει λειτουργία αναφοράς ή εποπτείας. Δείτε την ειδική σελίδα για αυτόν τον περιορισμό.",
          ],
        },
        {
          heading: "Επιβολή",
          paragraphs: [
            "Αυτή η έκδοση δεν διαθέτει ομάδα εποπτείας, μηχανισμό αποκλεισμού ή διαδικασία κυρώσεων και προσφυγών. Μην βασίζεστε στους κανόνες αυτούς ως πραγματική παρέμβαση.",
          ],
        },
      ],
      relatedTitle: "Σχετικές σελίδες",
      related: [
        { label: "Πώς να αναφέρετε περιεχόμενο", to: "/legal/report" },
        { label: "Αρχές ασφάλειας", to: "/legal/security" },
        { label: "Πολιτική απορρήτου", to: "/legal/privacy" },
      ],
      backHome: "Επιστροφή στην αρχική",
    },
    report: {
      title: "Αναφορά περιεχομένου ή λογαριασμού",
      summary:
        "Οι παρακάτω πληροφορίες περιγράφουν μια πιθανή μελλοντική διαδικασία· δεν αποτελούν φόρμα αναφοράς.",
      draftNotice:
        "ΔΕΝ ΑΠΟΣΤΕΛΛΕΤΑΙ ΑΝΑΦΟΡΑ: το TalkChat δεν διαθέτει ακόμη ανταλλαγή μηνυμάτων, κουμπί αναφοράς, ομάδα ελέγχου ή δημοσιευμένη διεύθυνση επικοινωνίας για αναφορές.",
      reviewedAt: "Πληροφορίες πρωτοτύπου — έλεγχος πριν από την κυκλοφορία.",
      sections: [
        {
          heading: "Η αναφορά δεν είναι ακόμη διαθέσιμη",
          paragraphs: [
            "Αυτή η σελίδα δεν αποστέλλει αναφορά και δεν συλλέγει αποδεικτικά στοιχεία. Μην χρησιμοποιείτε τις φόρμες εγγραφής ή σύνδεσης για να αναφέρετε πρόβλημα· προορίζονται μόνο για την ταυτοποίηση λογαριασμού.",
            "Δεν αναφέρεται διεύθυνση email ή στοιχεία επικοινωνίας για αναφορές, επειδή δεν έχει καθοριστεί λειτουργικό κανάλι. Αυτή η σελίδα δεν μπορεί να λάβει ή να επεξεργαστεί αίτημα.",
          ],
        },
        {
          heading: "Πληροφορίες για προετοιμασία μελλοντικής αναφοράς",
          paragraphs: [
            "Αν ξεκινήσει υπηρεσία με ειδική λειτουργία, ίσως είναι χρήσιμο να περιγράψετε το σχετικό περιεχόμενο ή τον λογαριασμό, πού εμφανίζεται, τον λόγο της αναφοράς και περίπου πότε συνέβη. Κοινοποιείτε μόνο τις απολύτως απαραίτητες πληροφορίες και αποφύγετε τη δημόσια διάδοση προσωπικών δεδομένων ή ευαίσθητου περιεχομένου.",
          ],
        },
        {
          heading: "Επείγουσες καταστάσεις",
          paragraphs: [
            "Το TalkChat δεν παρακολουθεί αυτή τη σελίδα και δεν μπορεί να ανταποκριθεί σε επείγοντα περιστατικά. Σε περίπτωση άμεσου κινδύνου, επικοινωνήστε με τις υπηρεσίες έκτακτης ανάγκης ή τις αρμόδιες αρχές στον τόπο κατοικίας σας.",
          ],
        },
        {
          heading: "Τι πρέπει να καθοριστεί πριν από την κυκλοφορία",
          bullets: [
            "Ένα λειτουργικό και προσβάσιμο κανάλι αναφοράς.",
            "Κατηγορίες, ενδεικτικά χρονοδιαγράμματα, κανόνες χειρισμού και πληροφορίες που διατηρούνται.",
            "Προστασία των ατόμων που υποβάλλουν αναφορές, ειδοποιήσεις και διαδικασία προσφυγής.",
            "Οι ευθύνες του φορέα εκμετάλλευσης και οι κανόνες στις σχετικές δικαιοδοσίες.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Σχετικές σελίδες",
      related: [
        { label: "Κανόνες κοινότητας", to: "/legal/community" },
        { label: "Πολιτική απορρήτου", to: "/legal/privacy" },
      ],
      backHome: "Επιστροφή στην αρχική",
    },
    security: {
      title: "Αρχές ασφάλειας",
      summary:
        "Αυτή η σελίδα διακρίνει τους περιορισμούς της επίδειξης από τους στόχους που πρέπει να σχεδιαστούν πριν από μια πραγματική υπηρεσία.",
      draftNotice:
        "ΚΑΜΙΑ ΕΓΓΥΗΣΗ ΑΣΦΑΛΕΙΑΣ: οι παρακάτω αρχές αποτελούν στόχους σχεδιασμού. Δεν περιγράφουν προστασίες που έχουν ήδη υλοποιηθεί ή ελεγχθεί.",
      reviewedAt: "Πληροφορίες πρωτοτύπου — έλεγχος πριν από την κυκλοφορία.",
      sections: [
        {
          heading: "Τρέχουσα κατάσταση του έργου",
          paragraphs: [
            "Το Supabase Auth παρέχει εγγραφή λογαριασμού, σύνδεση, διαχείριση συνεδρίας και ανάκτηση κωδικού πρόσβασης. Αυτό το frontend δεν υλοποιεί ανταλλαγή μηνυμάτων, κρυπτογράφηση από άκρο σε άκρο, ασφαλή αντίγραφα ασφαλείας, αυτόματη διαγραφή, παρακολούθηση, όρια προσπαθειών στον διακομιστή ή διαδικασία απόκρισης σε περιστατικά.",
            "Η προστασία διαδρομών στο frontend δεν αποτελεί όριο εξουσιοδότησης και δεν αντικαθιστά ελέγχους διακομιστή ή πολιτικές RLS του Supabase. Δεν έχουν υλοποιηθεί πίνακες μηνυμάτων ή προφίλ.",
          ],
        },
        {
          heading: "Προτεινόμενοι στόχοι για μελλοντική έκδοση",
          bullets: [
            "Ελαχιστοποίηση των δεδομένων που συλλέγονται και περιορισμός της πρόσβασης σε όσα είναι αναγκαία.",
            "Προστασία λογαριασμών και συνεδριών, επαλήθευση δικαιωμάτων από την πλευρά του διακομιστή και δοκιμή των κανόνων πρόσβασης.",
            "Χρήση κρυπτογραφημένων συνδέσεων κατά τη μεταφορά και διατήρηση μυστικών εκτός κώδικα που διανέμεται στο πρόγραμμα περιήγησης.",
            "Αξιολόγηση ενός καλά ελεγμένου πρωτοκόλλου E2EE πριν από οποιονδήποτε ισχυρισμό για κρυπτογράφηση από άκρο σε άκρο.",
            "Καθορισμός αντιγράφων ασφαλείας, κλειδιών ανάκτησης, διατήρησης και δοκιμών επαναφοράς πριν από την ανακοίνωσή τους.",
            "Σχεδιασμός ενημερώσεων, ελέγχων, ελαχιστοποιημένων αρχείων καταγραφής και αντιμετώπισης ευπαθειών.",
          ],
          paragraphs: [],
        },
        {
          heading: "Περιορισμοί και επικοινωνία για θέματα ασφάλειας",
          paragraphs: [
            "Οι στόχοι αυτοί δεν αποτελούν πιστοποίηση ούτε εγγύηση απόλυτης προστασίας. Ο υπεύθυνος ασφάλειας, το κανάλι γνωστοποίησης, οι χρόνοι απόκρισης και τα δημόσια στοιχεία επικοινωνίας δεν έχουν ακόμη καθοριστεί. Μην καταχωρίζετε προσωπικά δεδομένα ή μυστικά στις φόρμες της επίδειξης.",
          ],
        },
      ],
      relatedTitle: "Σχετικές σελίδες",
      related: [
        { label: "Πολιτική απορρήτου", to: "/legal/privacy" },
        { label: "Όροι χρήσης", to: "/legal/terms" },
        { label: "Πώς να αναφέρετε περιεχόμενο", to: "/legal/report" },
      ],
      backHome: "Επιστροφή στην αρχική",
    },
  },
  ro: {
    terms: {
      title: "Termeni și condiții",
      summary:
        "Acesta este un proiect de lucru pentru un posibil serviciu TalkChat viitor. Nu este un acord juridic gata de utilizare.",
      draftNotice:
        "PROIECT — ESTE NECESARĂ REVIZUIREA JURIDICĂ: înainte de orice lansare publică, identitatea și datele de contact ale operatorului, legea aplicabilă, condițiile privind răspunderea și termenii finali trebuie completate și revizuite de un profesionist calificat.",
      reviewedAt: "Proiect — fără dată de intrare în vigoare.",
      sections: [
        {
          heading: "1. Starea actuală a proiectului",
          paragraphs: [
            "TalkChat folosește Supabase Auth pentru conturi, autentificare și recuperarea parolei. Mesageria, stocarea conversațiilor și moderarea nu sunt implementate.",
            "Acest proiect enumeră subiectele care trebuie abordate dacă serviciul va fi lansat. Nu înseamnă că un serviciu, un canal de asistență sau un proces de moderare este disponibil în prezent.",
          ],
        },
        {
          heading: "2. Accesul preconizat și vârsta minimă",
          paragraphs: [
            "Interfața solicită data nașterii și verifică local o vârstă minimă de 13 ani înainte de înregistrare. Aceasta nu este o verificare a identității și nu se aplică nicio regulă privind vârsta pe server.",
            "Vârsta minimă, metoda de verificare și regulile pentru minori trebuie analizate pentru fiecare țară în care serviciul ar putea fi oferit, înainte de lansare.",
          ],
        },
        {
          heading: "3. Conduita așteptată dacă serviciul există",
          paragraphs: [
            "Utilizatorii unui serviciu viitor ar trebui să respecte legea aplicabilă și regulile comunității. Abuzurile, tentativele de acces neautorizat, uzurparea identității și conținutul care încalcă drepturile altora ar trebui gestionate conform unor reguli publicate și unui proces de contestație definit.",
            "Nu funcționează nicio sancțiune, moderare sau procedură reală de contestație.",
          ],
        },
        {
          heading: "4. Conținut și drepturi",
          paragraphs: [
            "Drepturile asupra conținutului, eventualele permisiuni limitate necesare pentru operarea unui serviciu viitor și regulile privind conținutul ilegal sau raportat trebuie precizate într-o versiune finală. Acest proiect nu acordă și nu revendică o licență asupra conținutului utilizatorilor.",
          ],
        },
        {
          heading: "5. Disponibilitate, răspundere și încetarea serviciului",
          paragraphs: [
            "Această versiune nu oferă angajamente privind disponibilitatea, păstrarea mesajelor sau continuitatea serviciului. Exonerările, limitele răspunderii, încetarea, exportul și regulile de ștergere trebuie redactate și revizuite în conformitate cu legea aplicabilă înainte de lansare.",
          ],
        },
        {
          heading: "6. Operator, lege aplicabilă și contact",
          paragraphs: [
            "Identitatea juridică, adresa și datele de contact ale operatorului, legea aplicabilă și instanțele competente nu sunt furnizate. Aceste informații nu trebuie inventate și trebuie completate înainte de publicare.",
          ],
        },
      ],
      relatedTitle: "Informații conexe",
      related: [
        { label: "Politica de confidențialitate", to: "/legal/privacy" },
        { label: "Regulile comunității", to: "/legal/community" },
        { label: "Principii de securitate", to: "/legal/security" },
      ],
      backHome: "Înapoi la pagina principală",
    },
    privacy: {
      title: "Politica de confidențialitate",
      summary:
        "Această pagină descrie prelucrarea actuală realizată de TalkChat și informațiile care trebuie încă definite înainte de o lansare publică.",
      draftNotice:
        "PROIECT — ESTE NECESARĂ REVIZUIREA JURIDICĂ: acesta nu este un sfat juridic și nici o garanție de conformitate. Scopurile, temeiurile juridice, operatorii, destinatarii, perioadele de păstrare și drepturile trebuie definite și revizuite pentru jurisdicțiile relevante înainte de lansare.",
      reviewedAt: "Proiect — fără dată de intrare în vigoare.",
      sections: [
        {
          heading: "1. Date utilizate de versiunea actuală",
          paragraphs: [
            "La înregistrare și autentificare, adresa de e-mail și parola sunt trimise direct către proiectul Supabase configurat pentru Supabase Auth. Numele afișat este trimis ca metadată a contului. Data nașterii și acceptarea termenilor sunt utilizate doar în browser și nu sunt trimise.",
            "SDK-ul Supabase gestionează persistența sesiunii în browser. Celelalte valori din formulare rămân temporar în memoria paginii; browserul poate oferi separat memorarea câmpurilor prin funcția de completare automată.",
            "Preferințele de temă și limbă sunt stocate separat în spațiul local al browserului. Dacă spațiul de stocare nu este disponibil, acestea sunt păstrate doar pe durata vizitei curente.",
          ],
        },
        {
          heading: "2. Servicii externe și jurnale",
          paragraphs: [
            "Supabase prelucrează datele necesare autentificării. Trimiterea e-mailurilor depinde de configurația proiectului și de furnizorul SMTP; această configurație nu a fost verificată. Nu este implementat niciun serviciu de analiză sau nicio funcție de mesagerie TalkChat. Furnizorul de găzduire și infrastructura de rețea pot prelucra, de asemenea, date de conectare sau pot păstra jurnale.",
          ],
        },
        {
          heading: "3. Date posibile într-un serviciu viitor",
          paragraphs: [
            "Datele pe care un serviciu viitor le va colecta efectiv nu au fost definite. Acestea ar putea include informații despre cont și conținut sau metadate necesare funcționării serviciului, însă nu s-a decis încă nicio listă exhaustivă, niciun scop sau temei juridic.",
            "Destinatarii, persoanele împuternicite, eventualele transferuri în afara regiunii selectate, perioadele de păstrare, regulile de backup și procedurile de ștergere trebuie încă stabilite. În prezent nu se promite ștergerea automată sau o anumită perioadă de păstrare.",
          ],
        },
        {
          heading: "4. Drepturi și solicitări",
          paragraphs: [
            "Drepturile persoanelor, modalitatea de exercitare, termenele de răspuns și autoritatea relevantă depind, între altele, de locul în care locuiesc persoanele, de operatorul serviciului și de legea aplicabilă. Aceste detalii, operatorul de date și o modalitate validă de contact trebuie adăugate înainte de lansare.",
            "Această demonstrație nu are niciun canal pentru solicitări de acces, rectificare, ștergere sau reclamații.",
          ],
        },
        {
          heading: "5. Confidențialitate și criptare",
          paragraphs: [
            "Prezența acestei pagini nu înseamnă că discuțiile sunt criptate integral, de la un capăt la altul. Această versiune nu are un sistem de mesagerie sau criptare E2EE. Orice criptare viitoare și limitele acesteia trebuie descrise după proiectarea și revizuirea tehnică.",
          ],
        },
      ],
      relatedTitle: "Pagini conexe",
      related: [
        { label: "Termeni și condiții", to: "/legal/terms" },
        { label: "Principii de securitate", to: "/legal/security" },
        { label: "Cum să raportați conținutul", to: "/legal/report" },
      ],
      backHome: "Înapoi la pagina principală",
    },
    community: {
      title: "Regulile comunității",
      summary:
        "Principii propuse pentru conversații, în cazul în care TalkChat devine un serviciu de mesagerie.",
      draftNotice:
        "PROIECT — TalkChat nu oferă în prezent mesagerie sau moderare. Aceste reguli nu sunt aplicate de un sistem operațional.",
      reviewedAt: "Principii propuse — fără dată de intrare în vigoare.",
      sections: [
        {
          heading: "Respect și siguranță",
          paragraphs: [
            "Tratați-i pe ceilalți cu respect. Amenințările, hărțuirea direcționată, ura, intimidarea și încurajarea violenței nu își au locul într-o comunitate sigură.",
            "Nu distribuiți informațiile private ale altei persoane fără permisiune. Nu vă dați drept altcineva și nu încercați să accesați un cont sau un dispozitiv fără autorizare.",
          ],
        },
        {
          heading: "Conținut și solicitări",
          paragraphs: [
            "Nu trimiteți conținut ilegal, fraude, programe malware, spam sau solicitări nedorite repetate. Respectați drepturile de autor și celelalte drepturi aplicabile.",
            "Aceste principii reprezintă o propunere editorială. Definițiile conținutului interzis, excepțiile, măsurile posibile și căile de contestație trebuie stabilite înainte de lansare.",
          ],
        },
        {
          heading: "Minori și raportare",
          paragraphs: [
            "Nu vizați minorii în mod nepotrivit și nu distribuiți imagini sau informații care i-ar putea pune în pericol. Regulile de protecție, gestionarea raportărilor și escaladarea trebuie proiectate cu măsuri de protecție adecvate înainte de orice lansare publică.",
            "Demonstrația nu are funcție de raportare sau moderare. Consultați pagina dedicată pentru această limitare.",
          ],
        },
        {
          heading: "Aplicarea regulilor",
          paragraphs: [
            "Această versiune nu are echipă de moderare, mecanism de blocare sau proces de sancționare și contestație. Nu vă bazați pe aceste reguli ca pe o intervenție reală.",
          ],
        },
      ],
      relatedTitle: "Pagini conexe",
      related: [
        { label: "Cum să raportați conținutul", to: "/legal/report" },
        { label: "Principii de securitate", to: "/legal/security" },
        { label: "Politica de confidențialitate", to: "/legal/privacy" },
      ],
      backHome: "Înapoi la pagina principală",
    },
    report: {
      title: "Raportați conținutul sau un cont",
      summary:
        "Informațiile de mai jos descriu un posibil proces viitor; nu reprezintă un formular de raportare.",
      draftNotice:
        "NU SE TRIMITE NICIO RAPORTARE: TalkChat nu dispune încă de mesagerie, buton de raportare, echipă de verificare sau adresă publicată pentru raportări.",
      reviewedAt: "Informații despre prototip — revizuiți înainte de lansare.",
      sections: [
        {
          heading: "Raportarea nu este încă disponibilă",
          paragraphs: [
            "Această pagină nu trimite o raportare și nu colectează dovezi. Nu utilizați formularele de înregistrare sau autentificare pentru a raporta o problemă; acestea sunt doar pentru autentificarea contului.",
            "Nu este indicată nicio adresă de e-mail sau informație de contact pentru raportare, deoarece nu a fost definit niciun canal operațional. Această pagină nu poate primi sau procesa o solicitare.",
          ],
        },
        {
          heading: "Informații de pregătit pentru o raportare viitoare",
          paragraphs: [
            "Dacă se lansează un serviciu cu o funcție dedicată, poate fi util să descrieți conținutul sau contul în cauză, locul în care apare, motivul raportării și momentul aproximativ. Distribuiți numai informațiile strict necesare și evitați publicarea datelor personale sau a conținutului sensibil.",
          ],
        },
        {
          heading: "Situații urgente",
          paragraphs: [
            "TalkChat nu monitorizează această pagină și nu poate interveni în situații de urgență. În caz de pericol imediat, contactați serviciile de urgență sau autoritățile competente din zona în care locuiți.",
          ],
        },
        {
          heading: "Ce trebuie definit înainte de lansare",
          bullets: [
            "Un canal de raportare operațional și accesibil.",
            "Categorii, termene orientative, reguli de gestionare și informațiile păstrate.",
            "Protecția persoanelor care raportează, notificări și o procedură de contestație.",
            "Responsabilitățile operatorului și regulile din jurisdicțiile relevante.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Pagini conexe",
      related: [
        { label: "Regulile comunității", to: "/legal/community" },
        { label: "Politica de confidențialitate", to: "/legal/privacy" },
      ],
      backHome: "Înapoi la pagina principală",
    },
    security: {
      title: "Principii de securitate",
      summary:
        "Această pagină distinge limitele demonstrației de obiectivele care ar trebui proiectate înaintea unui serviciu real.",
      draftNotice:
        "FĂRĂ GARANȚIE DE SECURITATE: principiile de mai jos sunt obiective de proiectare. Ele nu descriu măsuri de protecție deja implementate sau auditate.",
      reviewedAt: "Informații despre prototip — revizuiți înainte de lansare.",
      sections: [
        {
          heading: "Starea actuală a proiectului",
          paragraphs: [
            "Supabase Auth oferă înregistrarea conturilor, autentificarea, gestionarea sesiunilor și recuperarea parolei. Acest frontend nu implementează mesagerie, criptare integrală de la un capăt la altul, copii de siguranță securizate, ștergere automată, monitorizare, limite de încercări pe server sau un proces de răspuns la incidente.",
            "Protecția rutelor din frontend nu reprezintă o limită de autorizare și nu înlocuiește verificările pe server sau politicile RLS Supabase. Nu sunt implementate tabele pentru mesaje sau profiluri.",
          ],
        },
        {
          heading: "Obiective propuse pentru o versiune viitoare",
          bullets: [
            "Minimizați datele colectate și limitați accesul la informațiile necesare.",
            "Protejați conturile și sesiunile, verificați permisiunile pe server și testați regulile de acces.",
            "Folosiți conexiuni criptate în tranzit și păstrați secretele în afara codului livrat browserului.",
            "Evaluați un protocol E2EE bine verificat înainte de a afirma că există criptare integrală de la un capăt la altul.",
            "Definiți copiile de siguranță, cheile de recuperare, păstrarea și testele de restaurare înainte de a le anunța.",
            "Planificați actualizări, verificări, jurnale minimizate și răspunsul la vulnerabilități.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limitări și contact pentru securitate",
          paragraphs: [
            "Aceste obiective nu reprezintă nici o certificare, nici o garanție de protecție absolută. Responsabilul de securitate, canalul de divulgare, termenele de răspuns și datele publice de contact nu au fost încă stabilite. Nu introduceți date personale sau secrete în formularele demonstrației.",
          ],
        },
      ],
      relatedTitle: "Pagini conexe",
      related: [
        { label: "Politica de confidențialitate", to: "/legal/privacy" },
        { label: "Termeni și condiții", to: "/legal/terms" },
        { label: "Cum să raportați conținutul", to: "/legal/report" },
      ],
      backHome: "Înapoi la pagina principală",
    },
  },
  cs: {
    terms: {
      title: "Podmínky služby",
      summary:
        "Toto je pracovní návrh pro případnou budoucí službu TalkChat. Nejde o právní dohodu připravenou k použití.",
      draftNotice:
        "NÁVRH — VYŽADUJE PRÁVNÍ KONTROLU: před jakýmkoli veřejným spuštěním je nutné doplnit totožnost a kontaktní údaje provozovatele, rozhodné právo, podmínky odpovědnosti a konečné podmínky a nechat je zkontrolovat kvalifikovaným odborníkem.",
      reviewedAt: "Návrh — bez data účinnosti.",
      sections: [
        {
          heading: "1. Aktuální stav projektu",
          paragraphs: [
            "TalkChat používá Supabase Auth pro účty, přihlašování a obnovení hesla. Zasílání zpráv, ukládání konverzací ani moderování nejsou implementovány.",
            "Tento návrh uvádí témata, která bude třeba řešit, pokud bude služba spuštěna. Neznamená to, že je dnes k dispozici služba, kanál podpory nebo proces moderování.",
          ],
        },
        {
          heading: "2. Zamýšlený přístup a minimální věk",
          paragraphs: [
            "Rozhraní požaduje datum narození a před registrací místně ověřuje minimální věk 13 let. Nejde o ověření totožnosti a na straně serveru se žádné věkové pravidlo nevynucuje.",
            "Minimální věk, způsob ověřování a pravidla pro nezletilé je nutné před spuštěním posoudit pro každou zemi, ve které může být služba nabízena.",
          ],
        },
        {
          heading: "3. Očekávané chování, pokud bude služba existovat",
          paragraphs: [
            "Uživatelé budoucí služby budou muset dodržovat platné právní předpisy a pravidla komunity. Zneužívání, pokusy o neoprávněný přístup, vydávání se za jinou osobu a obsah porušující práva ostatních bude třeba řešit podle zveřejněných pravidel a stanoveného odvolacího procesu.",
            "V praxi nejsou zavedena žádná skutečná opatření, moderování ani odvolací proces.",
          ],
        },
        {
          heading: "4. Obsah a práva",
          paragraphs: [
            "Práva k obsahu, případná omezená oprávnění potřebná k provozování budoucí služby a pravidla pro nezákonný nebo nahlášený obsah musí být upřesněny v konečné verzi. Tento návrh uživatelskému obsahu licenci ani neuděluje, ani si ji nenárokuje.",
          ],
        },
        {
          heading: "5. Dostupnost, odpovědnost a ukončení služby",
          paragraphs: [
            "Tato verze se nezavazuje k dostupnosti, uchovávání zpráv ani nepřetržitému provozu služby. Vyloučení odpovědnosti, její omezení, ukončení, export a pravidla mazání je nutné před spuštěním sepsat a zkontrolovat podle platného práva.",
          ],
        },
        {
          heading: "6. Provozovatel, rozhodné právo a kontakt",
          paragraphs: [
            "Právní totožnost provozovatele, jeho adresa a kontaktní údaje, rozhodné právo ani příslušné soudy nejsou uvedeny. Tyto údaje se nesmějí vymýšlet a je nutné je doplnit před zveřejněním.",
          ],
        },
      ],
      relatedTitle: "Související informace",
      related: [
        { label: "Zásady ochrany osobních údajů", to: "/legal/privacy" },
        { label: "Pravidla komunity", to: "/legal/community" },
        { label: "Bezpečnostní zásady", to: "/legal/security" },
      ],
      backHome: "Zpět na domovskou stránku",
    },
    privacy: {
      title: "Zásady ochrany osobních údajů",
      summary:
        "Tato stránka popisuje aktuální zpracování údajů službou TalkChat a informace, které je nutné stanovit před veřejným spuštěním.",
      draftNotice:
        "NÁVRH — VYŽADUJE PRÁVNÍ KONTROLU: nejde o právní poradenství ani záruku souladu s předpisy. Účely, právní základy, správci, příjemci, doby uchovávání a práva je nutné před spuštěním stanovit a zkontrolovat pro příslušné jurisdikce.",
      reviewedAt: "Návrh — bez data účinnosti.",
      sections: [
        {
          heading: "1. Údaje používané aktuální verzí",
          paragraphs: [
            "Při registraci a přihlášení se e-mailová adresa a heslo odesílají přímo do nakonfigurovaného projektu Supabase pro Supabase Auth. Zobrazované jméno se odesílá jako metadata účtu. Datum narození a souhlas s podmínkami se používají pouze v prohlížeči a neodesílají se.",
            "Supabase SDK zajišťuje uchovávání relace v prohlížeči. Ostatní hodnoty formulářů zůstávají dočasně v paměti stránky; prohlížeč může samostatně nabídnout zapamatování polí pomocí funkce automatického vyplňování.",
            "Nastavení vzhledu a jazyka se ukládá odděleně v místním úložišti prohlížeče. Pokud úložiště není dostupné, uchovávají se pouze po dobu aktuální návštěvy.",
          ],
        },
        {
          heading: "2. Externí služby a protokoly",
          paragraphs: [
            "Supabase zpracovává údaje potřebné k ověřování. Odesílání e-mailů závisí na konfiguraci projektu a poskytovateli SMTP; tato konfigurace nebyla ověřena. Není implementována žádná analytická služba ani funkce zasílání zpráv TalkChat. Poskytovatel hostingu a síťová infrastruktura mohou také zpracovávat údaje o připojení nebo vést protokoly.",
          ],
        },
        {
          heading: "3. Možné údaje v budoucí službě",
          paragraphs: [
            "Údaje, které bude budoucí služba skutečně shromažďovat, zatím nebyly stanoveny. Mohou zahrnovat informace o účtu a obsah či metadata potřebná k provozu služby, nebyl však dosud určen úplný seznam, účel ani právní základ.",
            "Příjemci, zpracovatelé, případné předávání mimo zvolený region, doby uchovávání, pravidla zálohování a postupy mazání je ještě třeba určit. V současnosti není slíbeno automatické mazání ani konkrétní doba uchovávání.",
          ],
        },
        {
          heading: "4. Práva a žádosti",
          paragraphs: [
            "Práva osob, způsob jejich uplatnění, lhůty pro odpověď a příslušný úřad závisejí mimo jiné na místě pobytu osob, provozovateli služby a platném právu. Tyto údaje, správce údajů a platný způsob kontaktování je nutné doplnit před spuštěním.",
            "Toto demo nemá žádný kanál pro žádosti o přístup, opravu, výmaz ani podání stížnosti.",
          ],
        },
        {
          heading: "5. Soukromí a šifrování",
          paragraphs: [
            "Existence této stránky neznamená, že jsou konverzace šifrovány mezi koncovými body. Tato verze nemá systém zasílání zpráv ani šifrování E2EE. Případné budoucí šifrování a jeho omezení je nutné popsat po technickém návrhu a kontrole.",
          ],
        },
      ],
      relatedTitle: "Související stránky",
      related: [
        { label: "Podmínky služby", to: "/legal/terms" },
        { label: "Bezpečnostní zásady", to: "/legal/security" },
        { label: "Jak nahlásit obsah", to: "/legal/report" },
      ],
      backHome: "Zpět na domovskou stránku",
    },
    community: {
      title: "Pravidla komunity",
      summary:
        "Navrhované zásady pro konverzace, pokud se TalkChat stane službou pro zasílání zpráv.",
      draftNotice:
        "NÁVRH — TalkChat v současnosti nenabízí zasílání zpráv ani moderování. Tato pravidla nejsou vynucována žádným fungujícím systémem.",
      reviewedAt: "Navrhované zásady — bez data účinnosti.",
      sections: [
        {
          heading: "Respekt a bezpečnost",
          paragraphs: [
            "Chovejte se k ostatním s respektem. Vyhrožování, cílené obtěžování, nenávist, zastrašování a podněcování k násilí do bezpečné komunity nepatří.",
            "Bez svolení nesdílejte soukromé informace jiné osoby. Nevydávejte se za někoho jiného a nepokoušejte se bez oprávnění získat přístup k účtu nebo zařízení.",
          ],
        },
        {
          heading: "Obsah a oslovování",
          paragraphs: [
            "Neodesílejte nezákonný obsah, podvody, malware, spam ani opakovaná nevyžádaná oslovení. Respektujte autorská práva a další platná práva.",
            "Tyto zásady jsou redakčním návrhem. Definice zakázaného obsahu, výjimky, možná opatření a možnosti odvolání je nutné stanovit před spuštěním.",
          ],
        },
        {
          heading: "Nezletilí a nahlašování",
          paragraphs: [
            "Nezaměřujte se nevhodným způsobem na nezletilé a nesdílejte obrázky ani informace, které by je mohly ohrozit. Pravidla ochrany, vyřizování oznámení a eskalaci je nutné navrhnout s vhodnými ochrannými opatřeními před jakýmkoli veřejným spuštěním.",
            "Demo nemá funkci nahlašování ani moderování. Další informace o tomto omezení najdete na vyhrazené stránce.",
          ],
        },
        {
          heading: "Vymáhání pravidel",
          paragraphs: [
            "Tato verze nemá moderátorský tým, funkci blokování ani proces sankcí a odvolání. Nespoléhejte na tato pravidla jako na skutečný zásah.",
          ],
        },
      ],
      relatedTitle: "Související stránky",
      related: [
        { label: "Jak nahlásit obsah", to: "/legal/report" },
        { label: "Bezpečnostní zásady", to: "/legal/security" },
        { label: "Zásady ochrany osobních údajů", to: "/legal/privacy" },
      ],
      backHome: "Zpět na domovskou stránku",
    },
    report: {
      title: "Nahlásit obsah nebo účet",
      summary:
        "Níže uvedené informace popisují možný budoucí postup; nejde o formulář pro nahlášení.",
      draftNotice:
        "ŽÁDNÉ HLÁŠENÍ SE NEODESÍLÁ: TalkChat zatím nemá zasílání zpráv, tlačítko pro nahlášení, tým pro posuzování ani zveřejněnou kontaktní adresu pro hlášení.",
      reviewedAt: "Informace o prototypu — před spuštěním zkontrolovat.",
      sections: [
        {
          heading: "Nahlašování zatím není k dispozici",
          paragraphs: [
            "Tato stránka neodesílá hlášení ani neshromažďuje důkazy. K nahlášení problému nepoužívejte registrační ani přihlašovací formuláře; slouží pouze k ověřování účtu.",
            "Není uvedena žádná e-mailová adresa ani kontaktní údaje pro hlášení, protože nebyl stanoven funkční kanál. Tato stránka nemůže žádost přijmout ani zpracovat.",
          ],
        },
        {
          heading: "Informace, které si připravit pro budoucí hlášení",
          paragraphs: [
            "Pokud bude spuštěna služba se zvláštní funkcí, může být užitečné popsat příslušný obsah nebo účet, místo, kde se zobrazuje, důvod nahlášení a přibližný čas. Sdílejte pouze nezbytně nutné informace a vyhněte se veřejnému šíření osobních údajů nebo citlivého obsahu.",
          ],
        },
        {
          heading: "Naléhavé situace",
          paragraphs: [
            "TalkChat tuto stránku nesleduje a nemůže zasahovat v naléhavých situacích. V případě bezprostředního nebezpečí kontaktujte záchranné složky nebo příslušné orgány v místě svého bydliště.",
          ],
        },
        {
          heading: "Co je nutné stanovit před spuštěním",
          bullets: [
            "Funkční a přístupný kanál pro nahlašování.",
            "Kategorie, orientační lhůty, pravidla vyřizování a uchovávané informace.",
            "Ochrana oznamovatelů, oznámení a odvolací proces.",
            "Odpovědnosti provozovatele a pravidla v příslušných jurisdikcích.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Související stránky",
      related: [
        { label: "Pravidla komunity", to: "/legal/community" },
        { label: "Zásady ochrany osobních údajů", to: "/legal/privacy" },
      ],
      backHome: "Zpět na domovskou stránku",
    },
    security: {
      title: "Bezpečnostní zásady",
      summary:
        "Tato stránka rozlišuje omezení dema od cílů, které by bylo nutné navrhnout před vytvořením skutečné služby.",
      draftNotice:
        "ŽÁDNÁ ZÁRUKA BEZPEČNOSTI: níže uvedené zásady jsou návrhové cíle. Nepopisují ochranu, která již byla implementována nebo auditována.",
      reviewedAt: "Informace o prototypu — před spuštěním zkontrolovat.",
      sections: [
        {
          heading: "Aktuální stav projektu",
          paragraphs: [
            "Supabase Auth zajišťuje registraci účtů, přihlašování, správu relací a obnovení hesla. Tento frontend neimplementuje zasílání zpráv, šifrování mezi koncovými body, zabezpečené zálohy, automatické mazání, monitorování, omezení počtu pokusů na serveru ani proces reakce na incidenty.",
            "Ochrana tras ve frontendu není hranicí oprávnění a nenahrazuje kontroly na straně serveru ani zásady RLS Supabase. Tabulky zpráv ani profilů nejsou implementovány.",
          ],
        },
        {
          heading: "Navrhované cíle pro budoucí verzi",
          bullets: [
            "Minimalizovat shromažďované údaje a omezit přístup pouze na nezbytné informace.",
            "Chránit účty a relace, ověřovat oprávnění na serveru a testovat pravidla přístupu.",
            "Používat šifrovaná spojení při přenosu a uchovávat tajné údaje mimo kód distribuovaný do prohlížeče.",
            "Před jakýmkoli tvrzením o šifrování mezi koncovými body posoudit důkladně prověřený protokol E2EE.",
            "Před oznámením stanovit zálohy, obnovovací klíče, uchovávání a testy obnovy.",
            "Plánovat aktualizace, kontroly, minimalizované protokoly a reakci na zranitelnosti.",
          ],
          paragraphs: [],
        },
        {
          heading: "Omezení a bezpečnostní kontakt",
          paragraphs: [
            "Tyto cíle nejsou certifikací ani zárukou absolutní ochrany. Odpovědná osoba pro bezpečnost, kanál pro zveřejňování zranitelností, lhůty odpovědí a veřejné kontaktní údaje ještě nebyly stanoveny. Do formulářů dema nevkládejte osobní údaje ani tajné informace.",
          ],
        },
      ],
      relatedTitle: "Související stránky",
      related: [
        { label: "Zásady ochrany osobních údajů", to: "/legal/privacy" },
        { label: "Podmínky služby", to: "/legal/terms" },
        { label: "Jak nahlásit obsah", to: "/legal/report" },
      ],
      backHome: "Zpět na domovskou stránku",
    },
  },
  sk: {
    terms: {
      title: "Podmienky služby",
      summary:
        "Toto je pracovný návrh pre prípadnú budúcu službu TalkChat. Nejde o právnu dohodu pripravenú na použitie.",
      draftNotice:
        "NÁVRH — VYŽADUJE PRÁVNU KONTROLU: pred akýmkoľvek verejným spustením treba doplniť totožnosť a kontaktné údaje prevádzkovateľa, rozhodné právo, podmienky zodpovednosti a konečné podmienky a nechať ich skontrolovať kvalifikovaným odborníkom.",
      reviewedAt: "Návrh — bez dátumu účinnosti.",
      sections: [
        {
          heading: "1. Aktuálny stav projektu",
          paragraphs: [
            "TalkChat používa Supabase Auth pre účty, prihlasovanie a obnovenie hesla. Posielanie správ, ukladanie konverzácií ani moderovanie nie sú implementované.",
            "Tento návrh uvádza témy, ktoré treba riešiť, ak sa služba spustí. Neznamená to, že je dnes dostupná služba, kanál podpory alebo proces moderovania.",
          ],
        },
        {
          heading: "2. Zamýšľaný prístup a minimálny vek",
          paragraphs: [
            "Rozhranie požaduje dátum narodenia a pred registráciou lokálne kontroluje minimálny vek 13 rokov. Nejde o overenie totožnosti a na strane servera sa nevynucuje žiadne vekové pravidlo.",
            "Minimálny vek, spôsob overenia a pravidlá pre maloletých treba pred spustením posúdiť pre každú krajinu, v ktorej sa služba môže ponúkať.",
          ],
        },
        {
          heading: "3. Očakávané správanie, ak bude služba existovať",
          paragraphs: [
            "Používatelia budúcej služby budú musieť dodržiavať platné právne predpisy a pravidlá komunity. Zneužívanie, pokusy o neoprávnený prístup, vydávanie sa za inú osobu a obsah porušujúci práva iných treba riešiť podľa zverejnených pravidiel a stanoveného odvolacieho procesu.",
            "V praxi sa neuplatňujú žiadne skutočné sankcie, moderovanie ani odvolací proces.",
          ],
        },
        {
          heading: "4. Obsah a práva",
          paragraphs: [
            "Práva k obsahu, prípadné obmedzené povolenia potrebné na prevádzku budúcej služby a pravidlá pre nezákonný alebo nahlásený obsah treba uviesť v konečnej verzii. Tento návrh používateľský obsah nelicencuje ani si naň nenárokuje licenciu.",
          ],
        },
        {
          heading: "5. Dostupnosť, zodpovednosť a ukončenie služby",
          paragraphs: [
            "Táto verzia sa nezaväzuje k dostupnosti, uchovávaniu správ ani nepretržitej prevádzke služby. Vylúčenia zodpovednosti, jej obmedzenia, ukončenie, export a pravidlá vymazávania treba pred spustením vypracovať a skontrolovať podľa platného práva.",
          ],
        },
        {
          heading: "6. Prevádzkovateľ, rozhodné právo a kontakt",
          paragraphs: [
            "Právna totožnosť prevádzkovateľa, adresa, kontaktné údaje, rozhodné právo ani príslušné súdy nie sú uvedené. Tieto údaje sa nesmú vymýšľať a treba ich doplniť pred zverejnením.",
          ],
        },
      ],
      relatedTitle: "Súvisiace informácie",
      related: [
        { label: "Zásady ochrany osobných údajov", to: "/legal/privacy" },
        { label: "Pravidlá komunity", to: "/legal/community" },
        { label: "Bezpečnostné zásady", to: "/legal/security" },
      ],
      backHome: "Späť na domovskú stránku",
    },
    privacy: {
      title: "Zásady ochrany osobných údajov",
      summary:
        "Táto stránka opisuje aktuálne spracúvanie údajov službou TalkChat a informácie, ktoré treba určiť pred verejným spustením.",
      draftNotice:
        "NÁVRH — VYŽADUJE PRÁVNU KONTROLU: nejde o právne poradenstvo ani záruku súladu s predpismi. Účely, právne základy, prevádzkovatelia, príjemcovia, doby uchovávania a práva treba pred spustením určiť a skontrolovať pre príslušné jurisdikcie.",
      reviewedAt: "Návrh — bez dátumu účinnosti.",
      sections: [
        {
          heading: "1. Údaje používané aktuálnou verziou",
          paragraphs: [
            "Pri registrácii a prihlásení sa e-mailová adresa a heslo odosielajú priamo do nakonfigurovaného projektu Supabase pre Supabase Auth. Zobrazované meno sa odosiela ako metadáta účtu. Dátum narodenia a súhlas s podmienkami sa používajú iba v prehliadači a neodosielajú sa.",
            "Supabase SDK spravuje uchovávanie relácie v prehliadači. Ostatné hodnoty formulára zostávajú dočasne v pamäti stránky; prehliadač môže nezávisle ponúknuť zapamätanie polí prostredníctvom funkcie automatického dopĺňania.",
            "Nastavenia témy a jazyka sa ukladajú oddelene v lokálnom úložisku prehliadača. Ak úložisko nie je dostupné, uchovávajú sa iba počas aktuálnej návštevy.",
          ],
        },
        {
          heading: "2. Externé služby a protokoly",
          paragraphs: [
            "Supabase spracúva údaje potrebné na overenie. Odosielanie e-mailov závisí od konfigurácie projektu a poskytovateľa SMTP; táto konfigurácia nebola overená. Nie je implementovaná analytická služba ani funkcia posielania správ TalkChat. Poskytovateľ hostingu a sieťová infraštruktúra môžu tiež spracúvať údaje o pripojení alebo viesť protokoly.",
          ],
        },
        {
          heading: "3. Možné údaje v budúcej službe",
          paragraphs: [
            "Údaje, ktoré bude budúca služba skutočne zhromažďovať, ešte neboli určené. Môžu zahŕňať informácie o účte a obsah alebo metadáta potrebné na prevádzku služby, ale zatiaľ nebol určený úplný zoznam, účel ani právny základ.",
            "Príjemcovia, sprostredkovatelia, prípadné prenosy mimo zvoleného regiónu, doby uchovávania, pravidlá zálohovania a postupy vymazania sa ešte musia určiť. V súčasnosti sa nesľubuje automatické vymazanie ani konkrétna doba uchovávania.",
          ],
        },
        {
          heading: "4. Práva a žiadosti",
          paragraphs: [
            "Práva osôb, spôsob ich uplatnenia, lehoty na odpoveď a príslušný orgán závisia okrem iného od miesta pobytu osôb, prevádzkovateľa služby a platného práva. Tieto podrobnosti, prevádzkovateľa údajov a platný spôsob kontaktu treba doplniť pred spustením.",
            "Toto demo nemá kanál na žiadosti o prístup, opravu, vymazanie ani sťažnosti.",
          ],
        },
        {
          heading: "5. Súkromie a šifrovanie",
          paragraphs: [
            "Existencia tejto stránky neznamená, že konverzácie sú šifrované medzi koncovými bodmi. Táto verzia nemá systém správ ani šifrovanie E2EE. Každé budúce šifrovanie a jeho obmedzenia treba opísať po technickom návrhu a kontrole.",
          ],
        },
      ],
      relatedTitle: "Súvisiace stránky",
      related: [
        { label: "Podmienky služby", to: "/legal/terms" },
        { label: "Bezpečnostné zásady", to: "/legal/security" },
        { label: "Ako nahlásiť obsah", to: "/legal/report" },
      ],
      backHome: "Späť na domovskú stránku",
    },
    community: {
      title: "Pravidlá komunity",
      summary:
        "Navrhované zásady konverzácie pre prípad, že sa TalkChat stane službou na posielanie správ.",
      draftNotice:
        "NÁVRH — TalkChat v súčasnosti neposkytuje posielanie správ ani moderovanie. Tieto pravidlá nevynucuje žiadny prevádzkový systém.",
      reviewedAt: "Navrhované zásady — bez dátumu účinnosti.",
      sections: [
        {
          heading: "Rešpekt a bezpečnosť",
          paragraphs: [
            "Správajte sa k ostatným s rešpektom. Vyhrážky, cielené obťažovanie, nenávisť, zastrašovanie a podnecovanie násilia do bezpečnej komunity nepatria.",
            "Bez povolenia nezdieľajte súkromné informácie inej osoby. Nevydávajte sa za niekoho iného a nepokúšajte sa bez oprávnenia získať prístup k účtu alebo zariadeniu.",
          ],
        },
        {
          heading: "Obsah a oslovovanie",
          paragraphs: [
            "Neposielajte nezákonný obsah, podvody, škodlivý softvér, spam ani opakované nevyžiadané ponuky. Rešpektujte autorské práva a ďalšie platné práva.",
            "Tieto zásady sú redakčným návrhom. Definície zakázaného obsahu, výnimky, možné opatrenia a možnosti odvolania treba určiť pred spustením.",
          ],
        },
        {
          heading: "Maloletí a nahlasovanie",
          paragraphs: [
            "Nevhodne sa nezameriavajte na maloletých a nezdieľajte obrázky ani informácie, ktoré by ich mohli ohroziť. Pravidlá ochrany, spracovanie hlásení a eskaláciu treba navrhnúť s primeranými ochrannými opatreniami pred verejným spustením.",
            "Demo nemá funkciu nahlasovania ani moderovania. O tomto obmedzení si prečítajte na vyhradenej stránke.",
          ],
        },
        {
          heading: "Vymáhanie pravidiel",
          paragraphs: [
            "Táto verzia nemá tím moderátorov, funkciu blokovania ani proces sankcií a odvolaní. Nespoliehajte sa na tieto pravidlá ako na skutočný zásah.",
          ],
        },
      ],
      relatedTitle: "Súvisiace stránky",
      related: [
        { label: "Ako nahlásiť obsah", to: "/legal/report" },
        { label: "Bezpečnostné zásady", to: "/legal/security" },
        { label: "Zásady ochrany osobných údajov", to: "/legal/privacy" },
      ],
      backHome: "Späť na domovskú stránku",
    },
    report: {
      title: "Nahlásiť obsah alebo účet",
      summary:
        "Nasledujúce informácie opisujú možný budúci postup; nejde o formulár na nahlásenie.",
      draftNotice:
        "ŽIADNE HLÁSENIE SA NEODOSIELA: TalkChat zatiaľ nemá posielanie správ, tlačidlo na nahlásenie, kontrolný tím ani zverejnenú kontaktnú adresu na nahlasovanie.",
      reviewedAt: "Informácie o prototype — skontrolovať pred spustením.",
      sections: [
        {
          heading: "Nahlasovanie zatiaľ nie je dostupné",
          paragraphs: [
            "Táto stránka neodosiela hlásenie ani nezhromažďuje dôkazy. Na nahlásenie problému nepoužívajte registračné ani prihlasovacie formuláre; slúžia iba na overenie účtu.",
            "Nie je uvedená e-mailová adresa ani kontaktné údaje na nahlasovanie, pretože nebol určený funkčný kanál. Táto stránka nemôže prijať ani spracovať žiadosť.",
          ],
        },
        {
          heading: "Informácie na prípravu budúceho hlásenia",
          paragraphs: [
            "Ak sa spustí služba s osobitnou funkciou, môže byť užitočné opísať príslušný obsah alebo účet, kde sa zobrazuje, dôvod nahlásenia a približný čas. Zdieľajte iba nevyhnutne potrebné informácie a vyhnite sa verejnému šíreniu osobných údajov alebo citlivého obsahu.",
          ],
        },
        {
          heading: "Naliehavé situácie",
          paragraphs: [
            "TalkChat túto stránku nesleduje a nemôže zasiahnuť v núdzových situáciách. V prípade bezprostredného nebezpečenstva kontaktujte záchranné zložky alebo príslušné orgány v mieste svojho bydliska.",
          ],
        },
        {
          heading: "Čo treba určiť pred spustením",
          bullets: [
            "Funkčný a dostupný kanál na nahlasovanie.",
            "Kategórie, orientačné lehoty, pravidlá vybavovania a uchovávané informácie.",
            "Ochrana nahlasujúcich osôb, oznámenia a odvolací proces.",
            "Zodpovednosť prevádzkovateľa a pravidlá v príslušných jurisdikciách.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Súvisiace stránky",
      related: [
        { label: "Pravidlá komunity", to: "/legal/community" },
        { label: "Zásady ochrany osobných údajov", to: "/legal/privacy" },
      ],
      backHome: "Späť na domovskú stránku",
    },
    security: {
      title: "Bezpečnostné zásady",
      summary:
        "Táto stránka odlišuje obmedzenia dema od cieľov, ktoré treba navrhnúť pred skutočnou službou.",
      draftNotice:
        "BEZ ZÁRUKY BEZPEČNOSTI: zásady uvedené nižšie sú ciele návrhu. Neopisujú ochranu, ktorá už bola implementovaná alebo auditovaná.",
      reviewedAt: "Informácie o prototype — skontrolovať pred spustením.",
      sections: [
        {
          heading: "Aktuálny stav projektu",
          paragraphs: [
            "Supabase Auth poskytuje registráciu účtov, prihlasovanie, správu relácií a obnovenie hesla. Tento frontend neimplementuje posielanie správ, šifrovanie medzi koncovými bodmi, bezpečné zálohy, automatické mazanie, monitorovanie, limity pokusov na serveri ani proces reakcie na incidenty.",
            "Ochrana trás vo frontende nie je hranicou oprávnení a nenahrádza kontroly na strane servera ani zásady RLS Supabase. Tabuľky správ ani profilov nie sú implementované.",
          ],
        },
        {
          heading: "Navrhované ciele pre budúcu verziu",
          bullets: [
            "Minimalizovať zhromažďované údaje a obmedziť prístup na nevyhnutné informácie.",
            "Chrániť účty a relácie, overovať oprávnenia na serveri a testovať pravidlá prístupu.",
            "Používať šifrované spojenia pri prenose a uchovávať tajomstvá mimo kódu distribuovaného do prehliadača.",
            "Pred tvrdením o šifrovaní medzi koncovými bodmi posúdiť dôkladne overený protokol E2EE.",
            "Pred oznámením určiť zálohy, obnovovacie kľúče, uchovávanie a testy obnovenia.",
            "Plánovať aktualizácie, kontroly, minimalizované protokoly a reakciu na zraniteľnosti.",
          ],
          paragraphs: [],
        },
        {
          heading: "Obmedzenia a bezpečnostný kontakt",
          paragraphs: [
            "Tieto ciele nie sú certifikáciou ani zárukou absolútnej ochrany. Zodpovedná osoba za bezpečnosť, kanál na nahlasovanie zraniteľností, lehoty reakcie a verejné kontaktné údaje ešte neboli určené. Do formulárov dema nevkladajte osobné údaje ani tajomstvá.",
          ],
        },
      ],
      relatedTitle: "Súvisiace stránky",
      related: [
        { label: "Zásady ochrany osobných údajov", to: "/legal/privacy" },
        { label: "Podmienky služby", to: "/legal/terms" },
        { label: "Ako nahlásiť obsah", to: "/legal/report" },
      ],
      backHome: "Späť na domovskú stránku",
    },
  },
};
